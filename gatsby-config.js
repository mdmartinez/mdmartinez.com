module.exports = {
  siteMetadata: {
    title: 'Daniel Martinez',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-remove-trailing-slashes',
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        sourceMap: true,
        autoLabel: true,
        hoist: true,
      },
    },
    'gatsby-plugin-netlify',
  ],
};
