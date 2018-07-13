import React from 'react';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.log(e);
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: stylesStr }} />;
    }
    return (
      <html lang="en" {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preload"
            href="/static/2256e07a-0135-47d0-afbd-c63fcb1d4030.woff2"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/static/8436c5b3-8af1-40f9-acd7-48dfdcaeac50.woff2"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/static/52382db1-3de6-473e-b9c0-3cb5e70e80a2.woff2"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/static/b03c5cd2-c6ad-4764-9cab-bf6211f181a7.woff2"
            as="font"
            crossOrigin="anonymous"
          />
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
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
          <script type="text/javascript" async="true" src="js/mtiFontTrackingCode.js" />
          <script type="text/javascript" async="true" src="/sw.js" />
        </body>
      </html>
    );
  }
};
