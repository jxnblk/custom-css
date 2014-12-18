// App

var customCss = angular.module('custom-css', []);

customCss.config(['$compileProvider', function( $compileProvider ) {   
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|blob):/);
  }
]);

customCss.service('compile', require('./services/compile'));

customCss.directive('customCss', require('./directives/custom-css'));
customCss.directive('module', require('./directives/module'));


customCss.controller('MainCtrl', require('./controllers/main'));


customCss.filter('astCss', require('./filters/ast-css'));

customCss.filter('filesize', require('./filters/filesize'));

module.exports = customCss;

