const path = require('path');

module.exports = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

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
          filter: { fileAbsolutePath: { regex: "/content/posts//" } }
          limit: 1000
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          totalCount
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                date
                canonicalLink
                tags
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
  const postList = allMarkdownPosts.data.postList.edges;
  // create routes for 'posts'
  postList.forEach((edge, index) => {
    const slug = edge.node.fields.slug;
    const next = index === 0 ? null : postList[index - 1].node;
    const prev = index === postList.length - 1 ? null : postList[index + 1].node;
    const createBlogPost = path =>
      createPage({
        path: `${path}`,
        component: blogPostTemplate,
        context: {
          slug,
          next,
          prev,
        },
      });
    // Register blog post URL.
    createBlogPost(slug);
  });
};
