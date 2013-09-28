(function() {
  angular.module("rant_that.controllers", []);

  angular.module('rant_that.controllers', []).controller('IndexCtrl', [
    '$scope', '$rootScope', function($scope, $rootScope) {
      console.log("index ctrl");
      $scope.stories = $rootScope.stories;
      return $scope.$watch("stories", function(old, newer) {
        return $scope.stories = newer;
      });
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

  angular.module('rant_that.directives').directive('rtPost', [
    function() {
      return {
        template: "<form id=\"post-story\">\n	<div class=\"post\">\n		<input name=\"subject\" type=\"text\" placeholder=\"Subject Line...\"/>\n		<textarea placeholder=\"Enter message here...\"></textarea>\n		<div class=\"post-options\">\n			<i class=\"icon-compass\"></i><i class=\"icon-image\"></i>\n		</div>\n	</div>\n</form>",
        restrict: "A",
        link: function(scope, element, attrs, ctrl) {
          var post;
          return post = function() {
            return console.log("post story");
          };
        }
      };
    }
  ]);

  angular.module('rant_that.directives').directive('rtFeed', [
    function() {
      return {
        template: "<ul>\n	<li ng-repeat=\"story in stories\">\n		{{story.name}} - {{story.story}}\n	</li>\n\n</ul>",
        scope: {
          stories: "=stories"
        },
        restrict: "A",
        link: function(scope, element, attrs, ctrl) {
          var post;
          return post = function() {
            return console.log("post story");
          };
        }
      };
    }
  ]);

  angular.module('rant_that', ['restangular', 'rant_that.services', 'rant_that.directives', 'rant_that.controllers']).config([
    '$routeProvider', 'RestangularProvider', function($routeProvider, RestangularProvider) {
      console.log('hi');
      RestangularProvider.setBaseUrl('ticknardif.pagekite.me/api');
      return $routeProvider.when('/', {
        templateUrl: 'index',
        controller: 'IndexCtrl'
      }).when('/***', {
        templateUrl: 'index',
        controller: 'IndexCtrl'
      });
    }
  ]).run([
    '$rootScope', 'Restangular', function($rootScope, Restangular) {
      var baseStories;
      baseStories = Restangular.all('stories');
      $rootScope.allStories = baseStories.getList();
      return console.log($rootScope.allStories);
    }
  ]);

}).call(this);
