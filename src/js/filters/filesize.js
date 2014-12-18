
var Humanize = require('humanize-plus');

module.exports = function() {
  return function(n) {
    return Humanize.fileSize(n);
  }
};
