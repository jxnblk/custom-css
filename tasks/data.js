
var _ = require('lodash');
var postcss = require('postcss');
var modinfo = require('get-module-info');

module.exports = function(options) {

  var options = options || {};
  options = _.defaults(options, {
    dirname: '.',
    modules: [],
    variables: [],
  });


  var data = {};
  data.modules = options.modules.map(function(mod) {
    return modinfo(mod, { dirname: options.dirname });
  });

  data.initialDefaults = {};
  options.variables.forEach(function(name) {
    var css = modinfo(name, { dirname: options.dirname }).css;
    var root = postcss.parse(css);
    root.eachDecl(function(decl) {
      var key = decl.prop.replace(/^\-\-/,'');
      data.initialDefaults[key] = decl.value;
    });
  });

  return data;

};

