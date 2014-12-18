
var fs = require('fs');

module.exports = function($scope, $http, $window, compile) {

  $scope.styles = fs.readFileSync('./css/base.min.css', 'utf8');

  $scope.addStates = function() {
    $scope.modules.forEach(function(m, i) {
      m.isActive = true;
    });
    $scope.optionalModules.forEach(function(m, i) {
      m.isActive = false;
    });
    $scope.variables.forEach(function(v, i) {
      v.isActive = true;
    });
  }

  $scope.includes = [];
  $scope.compiled = '';

  $scope.build = function() {
    $scope.compiled = compile([$scope.modules, $scope.optionalModules, $scope.variables]);
    updateDownloadLink();
  };

  $scope.deselectAll = function(arr) {
    arr.forEach(function(n) {
      n.isActive = false;
    });
    $scope.build();
  };

  $scope.selectAll = function(arr) {
    arr.forEach(function(n) {
      n.isActive = true;
    });
    $scope.build();
  };

  function updateDownloadLink() {
    var blob = new Blob([$scope.compiled], { type: 'text/plain' });
    $scope.fileSize = blob.size;
    var url = (window.URL || window.webkitURL).createObjectURL( blob );
    $scope.downloadURL = url;
  };

};

