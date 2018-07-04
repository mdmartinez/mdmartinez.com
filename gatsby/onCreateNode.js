'use strict';
const { createFilePath } = require(`gatsby-source-filesystem`);
// Parse date information out of blog post filename.
const BLOG_POST_FILENAME_REGEX = /([0-9]+)\-([0-9]+)\-([0-9]+)\-(.+)\.md$/;

module.exports = exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `MarkdownRemark`) {
    const { permalink, redirect_from } = node.frontmatter;
    const { relativePath } = getNode(node.parent);
    const slug = createFilePath({ node, getNode });

    // Used to generate URL to view this content.
    createNodeField({
      node,
      name: `slug`,
      value: `${slug}`,
    });

    // can be used to create redirects.
    createNodeField({
      node,
      name: 'redirect',
      value: redirect_from ? JSON.stringify(redirect_from) : '',
    });
  }
};
