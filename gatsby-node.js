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
