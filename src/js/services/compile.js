
var css = require('css');
var rework = require('rework');
var rvars = require('rework-vars');
var rcm = require('rework-custom-media');
var rcalc = require('rework-calc');
var rcolors = require('rework-plugin-colors');

module.exports = function() {
  return function(arr) {

    var combined = css.parse('/*\n  Basscss Custom Build \n  http://basscss.com \n*/');
    var includes = [];

    arr.forEach(function(modules) {
      modules.forEach(function(m) {
        if (m.isActive) {
          includes.push(m.ast);
        }
      });
    });

    includes.forEach(function(include) {
      if (!include.stylesheet.rules) return;
      include.stylesheet.rules.forEach(function(r) {
        combined.stylesheet.rules.push(r);
      });
    });

    var result = css.stringify(combined);
    var compiled = rework(result)
      .use(rvars())
      .use(rcm())
      .use(rcalc)
      .use(rcolors())
      .toString();

    return compiled;
  }
};

