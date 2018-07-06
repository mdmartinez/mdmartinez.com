import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import PostHeader from '../components/PostHeader';
import { Provider } from 'rebass/emotion';
import 'typeface-fira-sans';
import '../css/global.css';
import theme from '../theme';

class Layout extends React.Component {
  render() {
    const { children, location, data } = this.props;
    const isPost = location.pathname.match(/^\/posts\//) ? true : false;
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
          ]}
        />
        <Provider theme={theme}>
          {isPost ? (
            <PostHeader siteTitle={data.site.siteMetadata.title} location={location} />
          ) : (
            <Header siteTitle={data.site.siteMetadata.title} location={location} />
          )}

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
