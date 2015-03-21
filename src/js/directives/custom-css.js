
module.exports = function($http) {
  return {
    controller: 'MainCtrl',
    scope: true,
    link: {
      pre: function(scope, el, attr) {
        //scope.dataSource = attr.src;
        /*
        $http.get(attr.src)
          .success(function(data) {
            scope.modules = data.modules;
            scope.optionalModules = data.optionalModules;
            scope.variables = data.variables;
            //scope.addStates();
            // Init
            scope.build();
          });
        */
      }
    }
  }
};
