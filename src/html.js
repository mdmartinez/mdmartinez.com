import React from 'react';

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="en" {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content="Daniel Martinez" />
          <link rel="icon" href="/favicon.ico" />
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
          <script type="text/javascript" async="true" src="js/ga.js" />
          <noscript>JavaScript must be enabled to view this site.</noscript>
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
          {/* <script type="text/javascript" async="true" src="js/seg.js" /> */}
          {/* <script type="text/javascript" async="true" src="js/mp.js" /> */}
          {/* <script type="text/javascript" async="true" src="js/am.js" /> */}
          <script type="text/javascript" async="true" src="js/heap.js" />
          {/* <script type="text/javascript" async="true" src="js/gauge.js" /> */}
          <script type="text/javascript" async="true" src="js/ins.js" />
          <script type="text/javascript" async="true" src="js/hj.js" />
          <script type="text/javascript" async="true" src="js/olark.js" />
          <script type="text/javascript" async="true" src="js/mtiFontTrackingCode.js" />
          <script type="text/javascript" src="js/register-sw.js" />
        </body>
      </html>
    );
  }
}
