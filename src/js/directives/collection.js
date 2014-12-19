
module.exports = function($http) {
  var index = 0;
  return {
    scope: true,
    link: {
      pre: function(scope, el, attr) {
        scope.index = index;
        index++;

        var isVariables = false;

        if (attr.variables) {
          isVariables = true;
        }

        function createVariablesArray(modules) {
          scope.variables = [];
          scope.customMedia = [];
          modules.forEach(function(module, i, modules) {
            module.isActive = true;
            module.ast.stylesheet.rules.forEach(function(rule, j, rules) {
              if (!rule.selectors) return;
              if (rule.selectors[0] == ':root') {
                rule.declarations.forEach(function(d, k, declarations) {
                  scope.variables.push(d);
                });
              }
            });
          });
        }

        function initModuleStates(modules) {
          modules.forEach(function(module) {
            if (typeof module.isActive === 'undefined') {
              module.isActive = false;
            }
          });
        }

        $http.get(attr.src)
          .success(function(data) {
            scope.modules = data;
            if (isVariables) createVariablesArray(scope.modules);
            //else initModuleStates(scope.modules);
            scope.collections[scope.index] = scope.modules;
            // Init
            scope.build();
          });
      }
    }
  }
};
