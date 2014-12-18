
var css = require('css');

module.exports = function() {
  return function(ast) {
    return css.stringify(ast);
  };
};

