'use strict';

var loaderUtils = require('loader-utils');
var jsxTransform = require('jsx-transform');

module.exports = function(source) {
  this.cacheable();
  
  var query = loaderUtils.parseQuery(this.query);
  
  var transform = jsxTransform.transform(source, {   
    ignoreDocblock : query.ignoreDocblock,
    tagMethods : query.tagMethods,
    jsx: query.jsx,
    tags: query.tags
  });
  this.callback(null, transform.code);
};