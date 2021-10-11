const path = require("path");
const stringToSlug = require("./lib/string-to-slug");
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { title: { ne: "" } } }
      ) {
        nodes {
          id
          frontmatter {
            title
          }
        }
      }
    }
  `);

  if (result.errors) {
    result.errors.forEach((e) => console.error(e.toString()));
    throw new Error(result.errors);
  }

  const pages = result.data.allMarkdownRemark.nodes;

  pages.forEach(({ id, frontmatter }) => {
    createPage({
      path: stringToSlug(frontmatter.title),
      component: path.resolve("./src/templates/InnerPage.js"),
      context: {
        id,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions, stage, plugins }) => {
  const stageConfig =
    stage === "build-javascript" || stage === "develop"
      ? {
          plugins: [plugins.provide({ process: "process/browser" })],
        }
      : {};
  actions.setWebpackConfig({
    resolve: {
      // Webpack >= 5 requires you to explicitly include a polyfill
      // for node.js core modules. This is required for react-markdown
      // to work correctly. Don't ask me why.
      // ? See docs: https://webpack.js.org/configuration/resolve/#resolvefallback
      fallback: {
        assert: require.resolve("assert"),
        util: require.resolve("util"),
      },
    },
    ...stageConfig,
  });
};
