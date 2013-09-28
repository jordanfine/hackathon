(function() {
  angular.module("rant_that.controllers", []);

  angular.module('rant_that.controllers', []).controller('IndexCtrl', [
    '$scope', '$rootScope', function($scope, $rootScope) {
      return console.log("index ctrl");
    }
  ]);

  angular.module("rant_that.services", []);

  angular.module("rant_that.directives", []);

  angular.module('rant_that', ['rant_that.services', 'rant_that.directives', 'rant_that.controllers']).config([
    '$routeProvider', function($routeProvider) {
      return $routeProvider.when('/', {
        templateUrl: 'index',
        controller: 'IndexCtrl'
      }).when('/***', {
        templateUrl: 'index',
        controller: 'IndexCtrl'
      });
    }
  ]).run([
    '$rootScope', function($rootScope) {
      return console.log("app.coffee run");
    }
  ]);

}).call(this);
