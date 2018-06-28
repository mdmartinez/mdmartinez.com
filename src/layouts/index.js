import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import MyHeader from '../components/MyHeader';
import { Provider } from 'rebass/emotion';

const theme = {
  breakpoints: ['32em', '48em', '64em', '80em'],
  fonts: {
    sans: '"Avenir Next LT Pro", "Fira Sans", "Helvetica Neue", system-ui, sans-serif',
    mono: '"Fira Code", "SF Mono", "Roboto Mono", Menlo, monospace',
    sofia: 'Sofia Pro Soft',
    freight: 'FreightSans',
  },
  fontWeights: {
    light: 300,
    normal: 400,
    bold: 700,
  },
  colors: {
    lightBlue: 'hsla(210, 100%, 50%, 0.5)',
    veryLightBlue: 'hsla(210, 100%, 75%, 0.4)',
    lightYellow: 'hsla(60, 100%, 80%, 0.8)',
    gray: '#eee',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 156, 188, 220, 256],
  radii: [0, 2, 4],
  shadows: [
    'none',
    'inset 0 0 0 1px #eee',
    'inset 0 0 0 1px #eee, 0 0 4px #eee',
    'inset 0 0 0 1px #eee, 0 0 8px #eee',
    'inset 0 0 0 2px #eee, 0 0 8px #eee',
    'inset 0 0 0 4px #eee, 0 0 12px #eee',
    'inset 0 0 0 4px #eee, 0 0 16px #eee',
  ],
  cardShadow: 'inset 0 0 0 1px hsla(210, 100%, 75%, 0.4), 0 0 4px hsla(210, 100%, 75%, 0.4)',
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
  }
`;
