import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import MyHeader from '../components/MyHeader';
// import css from '../css/index.css';
import styled from 'react-emotion';
import { Provider, Flex, Box } from 'rebass/emotion';

const theme = {
  breakpoints: ['32em', '48em', '64em', '80em'],
  fonts: {
    default: '"Avenir Next LT Pro", "Fira Sans", sans-serif',
    mono: 'Fira Code',
    sofia: 'Sofia Pro Soft',
    freight: 'FreightSans',
  },
  fontWeights: {
    light: 300,
  },
  colors: {
    lightBlue: 'hsla(210, 100%, 50%, 0.5)',
    lightYellow: 'hsla(60, 100%, 80%, 0.8)',
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
