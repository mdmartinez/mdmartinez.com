import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import MyHeader from '../components/MyHeader';
import '../css/index.css';
import styled from 'react-emotion';
import { Provider, Flex, Box } from 'rebass/emotion';

const theme = {
  fonts: {
    sans: '"Avenir Next", "Fira Sans", Helvetica, sans-serif',
  },
};

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: 'Making light of the obvious and the ordinary',
        },
        {
          name: 'keywords',
          content: 'experience, human, obvious, ordinary, meaningful, fulfillment',
        },
      ]}
    />
    <Provider theme={theme} data={data}>
      <MyHeader siteTitle={data.site.siteMetadata.title} />
      {children()}
    </Provider>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleAndMarkdownQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            route
          }
          timeToRead
          tableOfContents
          wordCount {
            paragraphs
            sentences
            words
          }
          excerpt
        }
      }
    }
  }
`;
