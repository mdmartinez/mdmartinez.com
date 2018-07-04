const path = require('path');

module.exports = async ({ graphql, boundActionCreators }) => {
  const { createPage, createRedirect } = boundActionCreators;

  const blogPostTemplate = path.resolve('src/templates/post.js');

  // Redirect /index.html to root.
  createRedirect({
    fromPath: '/index.html',
    redirectInBrowser: true,
    toPath: '/',
  });

  const allMarkdownPosts = await graphql(
    `
      {
        postList: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "content/posts/" } }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  if (allMarkdownPosts.errors) {
    console.error(allMarkdownPosts.errors);

    throw Error(allMarkdownPosts.errors);
  }

  // create routes for 'posts'
  allMarkdownPosts.data.postList.edges.forEach(edge => {
    const slug = edge.node.fields.slug;
    const createBlogPost = path =>
      createPage({
        path: `${path}`,
        component: blogPostTemplate,
        context: {
          slug,
        },
      });
    // Register blog post URL.
    createBlogPost(slug);
  });
};
