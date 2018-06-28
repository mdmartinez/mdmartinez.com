const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');
require('events').EventEmitter.prototype._maxListeners = 0;

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: 'posts' });
    createNodeField({
      node,
      name: `route`,
      value: `posts${slug}`,
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/layouts/blogPost.js`);
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 1000) {
              edges {
                node {
                  fields {
                    route
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        result.data.allMarkdownRemark.edges.forEach(edge => {
          createPage({
            path: `${edge.node.fields.route}`,
            component: blogPostTemplate,
            context: {
              route: edge.node.fields.route,
            },
          });
        });

        return;
      })
    );
  });
};

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise(resolve => {
    if (page.path.match(/^\/experiments/)) {
      page.layout = 'experiments';
      createPage(page);
    }
    resolve();
  });
};
