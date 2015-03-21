
module.exports = function($scope, $http, $window, compile) {

  $scope.collections = [];
  $scope.includes = [];
  $scope.compiled = '';

  $scope.build = function() {
    $scope.compiled = compile($scope.collections, $scope.options);
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

