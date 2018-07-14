import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Provider } from 'rebass/emotion';
import Header from '../components/Header';
import 'typeface-fira-sans';
import '../css/global.css';
import theme from '../theme';

class Layout extends React.Component {
  render() {
    const { children, location, data } = this.props;
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Making light of the obvious and the ordinary' },
            {
              name: 'keywords',
              content: 'experience, human, obvious, ordinary, meaningful, fulfillment',
            },
          ]}>
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content="Daniel Martinez" />
          <link rel="apple-touch-icon" href="/icons/apple-touch-icon-57x57.png" sizes="57x57" />
          <link rel="apple-touch-icon" href="/icons/apple-touch-icon-72x72.png" sizes="72x72" />
          <link rel="apple-touch-icon" href="/icons/apple-touch-icon-76x76.png" sizes="76x76" />
          <link rel="apple-touch-icon" href="/icons/apple-touch-icon-114x114.png" sizes="114x114" />
          <link rel="apple-touch-icon" href="/icons/apple-touch-icon-120x120.png" sizes="120x120" />
          <link rel="apple-touch-icon" href="/icons/apple-touch-icon-144x144.png" sizes="144x144" />
          <link rel="apple-touch-icon" href="/icons/apple-touch-icon-152x152.png" sizes="152x152" />
          <link rel="apple-touch-icon" href="/icons/apple-touch-icon-180x180.png" sizes="180x180" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
          <noscript>JavaScript must be enabled to view this site.</noscript>
        </Helmet>
        <Provider theme={theme}>
          <Header siteTitle={data.site.siteMetadata.title} location={location} />
          {children({ ...this.props })}
        </Provider>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
