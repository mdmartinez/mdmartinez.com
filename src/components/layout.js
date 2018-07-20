import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Provider } from 'rebass/emotion';
import Header from '../components/Header';
import 'typeface-fira-sans';
import '../css/global.css';
import '../css/prism-solarizedlight.css';
import theme from '../theme';

class Layout extends React.Component {
  render() {
    const { children, location } = this.propsasdf;
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              siteMetadata {
                title
                description
              }
            }
          }
        `}
        render={data => (
          <Fragment>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: data.site.siteMetadata.description },
                {
                  name: 'keywords',
                  content: 'experience, human, obvious, ordinary, meaningful, fulfillment',
                },
              ]}
            />
            <Provider theme={theme}>
              <Header siteTitle={data.site.siteMetadata.title} location={location} />
              {children}
            </Provider>
          </Fragment>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object,
  data: PropTypes.object,
};

export default Layout;
