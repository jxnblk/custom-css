
var fs = require('fs');

module.exports = function($http) {
  var template = fs.readFileSync('./src/templates/custom-css.html', 'utf8');
  return {
    controller: 'MainCtrl',
    template: template,
    scope: '=',
    link: {
      pre: function(scope, el, attr) {
        scope.dataSource = attr.src;
        $http.get(attr.src)
          .success(function(data) {
            scope.modules = data.modules;
            scope.optionalModules = data.optionalModules;
            scope.variables = data.variables;
            scope.addStates();
            // Init
            scope.build();
          });
      }
    }
  }
};
