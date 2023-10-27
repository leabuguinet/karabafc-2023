/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.onCreateWebpackConfig = ({
  actions
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(zip)$/i,
          use: {
            loader: "url-loader",
            options: {
              limit: 9000,
            },
          }
        },
      ]
    }
  })
}