
var fs = require('fs');

module.exports = function() {
  var template = fs.readFileSync('./src/templates/custom-css.html', 'utf8');
  return {
    template: template
  }
};

