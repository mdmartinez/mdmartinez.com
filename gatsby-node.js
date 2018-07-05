// this suppresses the max listener warning, but doesn't seem to prevent the page undefined error.
require('events').EventEmitter.prototype._maxListeners = 0;

// Useful for adding queriable data to nodes (like a URL path)
exports.onCreateNode = require('./gatsby/onCreateNode');

// Everything regarding routes.
// creates a routable path for a file by referencing a template. The template will populate dynamic data from GraphQL.
exports.createPages = require('./gatsby/createPages');

// Can modify page attributes, such as the layout. Default layout is layouts/index.js.
exports.onCreatePage = require('./gatsby/onCreatePage');
