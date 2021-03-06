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
  componentDidMount() {
    window.setTimeout(() => {
      if (window.location.href.indexOf('about') >= 0) {
        window.olark('api.box.show');
      } else {
        window.olark('api.box.hide');
      }
    }, 50);
  }

  render() {
    const { children, location } = this.props;
    const isPost = location.pathname.match(/^\/posts\//);
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
              <div css={{ background: theme.colors.blueSaturationScale[0] }}>
                <div
                  css={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    height: !!isPost ? 'initial' : '100vh',
                    background: 'white',
                    boxShadow: '0 0 8px rgba(0,0,0,0.3)',
                  }}>
                  <Header siteTitle={data.site.siteMetadata.title} location={location} />
                  {children}
                </div>
              </div>
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
