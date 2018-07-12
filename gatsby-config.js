module.exports = {
  siteMetadata: {
    title: 'Daniel Martinez',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
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
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://mdmartinez.us18.list-manage.com/subscribe/post?u=d2ba54848ea37cc4b8252f551&amp;id=5f96d69b04', // see instructions section below
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Daniel Martinez',
        short_name: 'Daniel Martinez',
        start_url: '/',
        background_color: '#35AFE8',
        theme_color: '#E1673D',
        display: 'minimal-ui',
        icon: 'src/images/portrait.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cache',
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [
          'Link: </icons/favicon-16x16.png>; rel=preload; as=image',
          'Link: </icons/favicon-32x32.png>; rel=preload; as=image',
          'Link: </icons/favicon-96x96.png>; rel=preload; as=image',
          'cache-control: public, max-age=0, must-revalidate',
        ], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ],
};
