const path = require("path");

const metaData = {
  siteUrl: "https://www.lorischmon.com",
  title: "lori-schmon",
};

module.exports = {
  siteMetadata: metaData,
  plugins: [
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: path.resolve(__dirname, "src/cms/cms.js"),
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/",
        query: `
          {
            allSitePage(filter: {path: {ne: "/404/", nin: ["/404/", "/dev-404-page/", "/404.html"]}}) {
              nodes {
                path
              }
            }
            site {
              siteMetadata {
                siteUrl
              }
            }
          }
        `,
        serialize: ({ path }) => ({
          url: path,
        }),
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        sitemap: `${metaData.siteUrl}/sitemap-index.xml`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.resolve(__dirname, "static/assets"),
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./content",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400", "700"],
            },
          ],
        },
      },
    },
    "gatsby-plugin-react-svg",
    "gatsby-plugin-netlify",
  ],
};
