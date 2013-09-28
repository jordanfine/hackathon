(function() {
  angular.module("rant_that.controllers", []);

  angular.module('rant_that.controllers', []).controller('IndexCtrl', [
    '$scope', '$rootScope', function($scope, $rootScope) {
      return console.log("index ctrl");
    }
  ]);

  angular.module("rant_that.services", []);

  angular.module("rant_that.directives", []);

  angular.module('rant_that.directives').directive('rtMap', [
    function() {
      return {
        template: "<div id=\"map-canvas\"></div>",
        scope: {
          geo: "=geo"
        },
        restrict: "A",
        link: function(scope, element, attrs, ctrl, rootScope) {
          var initialize, map;
          map = new google.maps.Map(document.getElementById('map-canvas'));
          $(function() {
            return google.maps.event.addDomListener(window, 'load', initialize);
          });
          return initialize = function() {
            var mapOptions;
            mapOptions = {
              zoom: 15,
              center: new google.maps.LatLng(29.6520, -82.3250),
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            return map.setOptions(mapOptions);
          };
        }
      };
    }
  ]);

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
