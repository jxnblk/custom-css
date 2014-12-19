
module.exports = function($scope, $http, $window, compile) {

  $scope.collections = [];
  $scope.variablesCollections = [];
  $scope.includes = [];
  $scope.compiled = '';

  $scope.build = function() {
    $scope.compiled = compile($scope.collections.concat($scope.variablesCollections), $scope.options);
    updateDownloadLink();
    //store();
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

  /*
  function getState() {
    var state = localStorageService.get('customCss');
    if (state) {
      console.log(state);
      $scope.collections = state.collections;
      $scope.variablesCollections = state.variablesCollections;
      $scope.build();
    }
  };

  function store() {
    var state = {};
    state.collections = $scope.collections;
    state.variablesCollections = $scope.variablesCollections;
    localStorageService.set('customCss', state);
  };
  */

  //getState();

};

