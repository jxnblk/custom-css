
var fs = require('fs');
var path = require('path');
var css = require('css');
var rework = require('rework');
var rnpm = require('rework-npm');

module.exports = function(arr) {

  var result = [];

  function parseModule(module, array) {
    var src = fs.readFileSync('./node_modules/' + module + '/index.css', 'utf8') || null;
    if (!src) return;
    var ast = rework(src)
      .use(rnpm({ root: './node_modules/' + module })).obj;
    var meta = require(module + '/package.json') || null;
    array.push({
      id: module,
      name: meta.name,
      description: meta.description,
      version: meta.version,
      homepage: meta.homepage,
      meta: meta,
      ast: ast
    });
  }

  /*
  function removeComments(array) {
    array.forEach(function(obj) {
      if (!obj.ast.stylesheet.rules) return;
      obj.ast.stylesheet.rules.forEach(function(rule, i) {
        if (rule.type == 'comment') {
          obj.ast.stylesheet.rules.splice(i, 1);
        }
      });
    });
  }
  */

  arr.forEach(function(module) {
    parseModule(module, result);
  });

  return result;

};
