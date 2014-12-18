
var fs = require('fs');

module.exports = function() {
  var template = fs.readFileSync('./src/templates/module.html', 'utf8');
  return {
    template: template,
    scope: true,
    link: function(scope, el, attr) {
    }
  }
};
