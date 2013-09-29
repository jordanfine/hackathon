(function() {
  angular.module('rant_that', ['restangular', 'ngResource', 'rant_that.services', 'rant_that.directives', 'rant_that.controllers']).config([
    '$routeProvider', 'RestangularProvider', '$httpProvider', function($routeProvider, RestangularProvider, $httpProvider) {
      console.log('hi');
      RestangularProvider.setBaseUrl('http://ticknardif.pagekite.me');
      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
      return $routeProvider.when('/', {
        templateUrl: './feed.html',
        controller: 'IndexCtrl'
      }).when('/user/:userId', {
        templateUrl: './user.html',
        controller: 'LoginCtrl'
      });
    }
  ]).run([
    '$rootScope', 'Restangular', '$http', function($rootScope, Restangular, $http) {
      console.log("hey");
      $rootScope.map = true;
      $rootScope.geo = [];
      $rootScope.$on("toggleMap", function(req, res) {
        console.log("rs- toggleMap");
        console.log(res);
        return $rootScope.map = res;
      });
      $rootScope.$on("addGeo", function(req, res) {
        console.log(res);
        console.log("ADD GEO YO");
        return $rootScope.geo.push(res);
      });
      return $rootScope.$watch("geo", function(old, newer) {
        console.log("WATCH GEO");
        return $rootScope.geo = newer;
      });
    }
  ]);

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
          var initialize, map, markers;
          map = new google.maps.Map(document.getElementById('map-canvas'));
          markers = [];
          $(function() {
            return google.maps.event.addDomListener(window, 'load', initialize);
          });
          scope.$on("geo", function(req, res) {
            return console.log(res);
          });
          scope.$watch("geo", function(old, newer) {
            scope.geo = newer;
            return console.log("geo new");
          });
          return initialize = function() {
            var geo, geoLoc, i, mapOptions, markerOptions, _i, _len, _results;
            geo = [
              {
                latitude: 29.9667,
                longitude: -90.0500,
                community_resource: true
              }, {
                latitude: 29.9242,
                longitude: -90.0123,
                community_resource: false
              }, {
                latitude: 29.90534,
                longitude: -90.2234,
                community_resource: false
              }, {
                latitude: 29.7234,
                longitude: -90.1343,
                community_resource: true
              }, {
                latitude: 29.82645,
                longitude: -90.093432,
                community_resource: true
              }
            ];
            mapOptions = {
              zoom: 9,
              center: new google.maps.LatLng(29.9667, -90.0500),
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map.setOptions(mapOptions);
            _results = [];
            for (i = _i = 0, _len = geo.length; _i < _len; i = ++_i) {
              geoLoc = geo[i];
              markers[i] = new google.maps.Marker();
              markerOptions = {
                map: map,
                position: new google.maps.LatLng(geoLoc.latitude, geoLoc.longitude),
                title: 'Hello World!',
                animation: google.maps.Animation.DROP
              };
              markers[i].setOptions(markerOptions);
              _results.push(console.log(markers[i]));
            }
            return _results;
          };
        }
      };
    }
  ]);

  angular.module('rant_that.directives').directive('rtPost', [
    function() {
      return {
        template: "<form id=\"post-story\">\n	<div class=\"post\">\n		<input name=\"subject\" type=\"text\" placeholder=\"Subject Line...\"/>\n		<textarea placeholder=\"Enter message here...\"></textarea>\n		<div class=\"post-options\">\n			<i class=\"icon-compass\"></i><i class=\"icon-image\"></i>\n			<button class=\"btn btn--primary\" id=\"send_post\" ng-click=\"post()\">Rant That</button>\n		</div>\n	</div>\n</form>",
        restrict: "A",
        link: function(scope, element, attrs, ctrl) {
          var story, storyId;
          console.log(scope);
          story = {};
          storyId = Math.floor((Math.random() * 100) + 1);
          return scope.post = function() {
            var community_resource, date, post, subject, user, username;
            subject = $('.post input[name="subject"]').val();
            post = $('.post textarea').val();
            date = new Date();
            user = 2;
            username = "Fabiola";
            community_resource = false;
            story = {
              user: user,
              username: username,
              subject: subject,
              story_text: post,
              time: date,
              community_resource: community_resource,
              happy_count: 0,
              heart_count: 0,
              laughing_count: 0,
              sad_count: 0,
              story_id: storyId++,
              upvoteCount: 0
            };
            if (subject !== '' && post !== '') {
              scope.$broadcast("postStory", story);
            }
            $('.post input[name="subject"]').val('');
            return $('.post textarea').val('');
          };
        }
      };
    }
  ]);

  angular.module('rant_that.directives').directive('rtFeed', [
    function() {
      return {
        template: "<ul>\n	<li ng-repeat=\"story in stories | orderBy: 'time':true\">\n		<div class=\"user_pic\">\n			<img src=\"public/img/fabiola.jpg\"></img>\n			<a href=\"#/user/{{story.user_id}}\" class=\"name\">{{story.username}}</a>\n		</div>\n		<div class=\"feed_post\">\n			<div class=\"feed_post-subject\">\n				<h2>{{story.subject}}</h2>\n				<span ng-show=\"story.community_resource\" class=\"badge commresource\">community resource</span>\n				<br/>\n				<span class=\"timestamp\">posted at {{story.time | date:'shortTime'}} on {{story.time | date:'mediumDate'}}</span>\n			</div>\n			<div class=\"feed_post-story\">\n				<p>{{story.story_text}}</p>\n				<ul class=\"hashtags\">\n					<li class=\"hashtag\" ng-repeat=\"hashtag in story.hashtags\">{{hashtag}}</li>\n				</ul>\n			</div>\n			<div class=\"feed_post-icons\">\n				<i class=\"icon-heart\" ng-click=\"upHeart(story)\"></i>{{story.heart_count}}\n				<i class=\"icon-smiley\" ng-click=\"upHappy(story)\"></i>{{story.happy_count}}\n				<i class=\"icon-sad\" ng-click=\"upSad(story)\"></i>{{story.sad_count}}\n				<i class=\"icon-grin\" ng-click=\"upLaughing(story)\"></i>{{story.laughing_count}}\n			</div>\n		</div>\n		<div class=\"comments\">\n\n\n		<div>\n	</li>\n\n</ul>",
        scope: {
          stories: "=stories"
        },
        restrict: "A",
        link: function(scope, element, attrs, ctrl) {
          var post;
          post = function() {
            return console.log("post story");
          };
          scope.$on("changedstories", function(req, res) {
            console.log("over here");
            return scope.stories = res;
          });
          scope.upHeart = function(story) {
            var i, s, _i, _len, _ref;
            console.log(story.upvoteCount);
            if (story.upvoteCount === 0) {
              _ref = scope.stories;
              for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
                s = _ref[i];
                if (s.story_id === story.story_id) {
                  scope.stories[i].heart_count = scope.stories[i].heart_count + 1;
                  scope.stories[i].upvoteCount = scope.stories[i].upvoteCount + 1;
                  return true;
                }
              }
            }
          };
          scope.upHappy = function(story) {
            var i, s, _i, _len, _ref;
            if (story.upvoteCount === 0) {
              _ref = scope.stories;
              for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
                s = _ref[i];
                if (s.story_id === story.story_id) {
                  scope.stories[i].happy_count = scope.stories[i].happy_count + 1;
                  scope.stories[i].upvoteCount = scope.stories[i].upvoteCount + 1;
                  return true;
                }
              }
            }
          };
          scope.upSad = function(story) {
            var i, s, _i, _len, _ref;
            if (story.upvoteCount === 0) {
              _ref = scope.stories;
              for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
                s = _ref[i];
                if (s.story_id === story.story_id) {
                  scope.stories[i].sad_count = scope.stories[i].sad_count + 1;
                  scope.stories[i].upvoteCount = scope.stories[i].upvoteCount + 1;
                  return true;
                }
              }
            }
          };
          return scope.upLaughing = function(story) {
            var i, s, _i, _len, _ref;
            if (story.upvoteCount === 0) {
              _ref = scope.stories;
              for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
                s = _ref[i];
                if (s.story_id === story.story_id) {
                  scope.stories[i].laughing_count = scope.stories[i].laughing_count + 1;
                  scope.stories[i].upvoteCount = scope.stories[i].upvoteCount + 1;
                  return true;
                }
              }
            }
          };
        }
      };
    }
  ]);

  angular.module("rant_that.controllers", []);

  angular.module('rant_that.controllers').controller('LoginCtrl', [
    '$scope', '$rootScope', '$templateCache', '$http', function($scope, $rootScope, $templateCache, $http) {
      $scope.map = false;
      console.log("login ctrl");
      $scope.stories = $rootScope.stories;
      $scope.$watch("stories", function(old, newer) {
        return $scope.stories = newer;
      });
      $scope.$emit("toggleMap", false);
      $scope.userId = window.location.hash.slice(7);
      return $http({
        method: 'GET',
        url: 'http://ticknardif.pagekite.me/users/' + $scope.userId + '',
        cache: $templateCache
      }).success(function(data, status, headers, config) {
        return $scope.user = {
          username: data.username,
          age: data.age,
          gender: data.gender
        };
      }).error(function(data, status, headers, config) {
        return console.log("error");
      });
    }
  ]);

  angular.module('rant_that.controllers').controller('IndexCtrl', [
    '$scope', '$rootScope', 'Restangular', '$http', '$templateCache', function($scope, $rootScope, Restangular, $http, $templateCache) {
      var post_story, resize;
      resize = function() {
        var feedHeight;
        feedHeight = $(window).height() - 360;
        return $('.l-feed').css({
          "height": "" + feedHeight + "px"
        });
      };
      $(function() {
        resize();
        $(window).on("resize", resize);
        return $('#send_post').on("click", post_story);
      });
      console.log("index ctrl");
      $scope.stories = [];
      $scope.geo = [];
      $scope.map = true;
      $scope.$on("postStory", function(req, res) {
        $scope.stories.push(res);
        return $scope.$broadcast("changedstories", $scope.stories);
      });
      $scope.$watch("stories", function(old, newer) {
        console.log("changed story");
        console.log(old);
        console.log(newer);
        return $scope.stories = newer;
      });
      $scope.$watch("geo", function(old, newer) {
        console.log(old);
        console.log(newer);
        return $scope.geo = newer;
      });
      $http({
        method: 'GET',
        url: 'http://ticknardif.pagekite.me/stories/',
        cache: $templateCache
      }).success(function(data, status, headers, config) {
        var i, story, _i, _len, _ref;
        console.log(data);
        if (data.items) {
          console.log(data.items);
          _ref = data.items;
          for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
            story = _ref[i];
            $scope.stories.push({
              user: story.user_id,
              username: story.username,
              subject: story.subject,
              story_text: story.story_text,
              time: new Date(story.posted_time),
              latitude: story.lat,
              longitude: story.lng,
              community_resource: story.community_resource,
              happy_count: story.happy_count,
              heart_count: story.heart_count,
              laughing_count: story.laughing_count,
              sad_count: story.sad_count,
              story_id: story.story_id,
              upvoteCount: 0,
              user_id: story.user_id,
              hashtags: story.hash_tags.split(",")
            });
            $scope.geo.push({
              latitude: story.lat,
              longitude: story.lng
            });
          }
          return $scope.$broadcast("geo", $scope.geo);
        } else {
          console.log(data);
          $scope.stories.push({
            user: data.user_id,
            username: story.username,
            subject: data.subject,
            story_text: data.story_text,
            time: data.posted_time,
            latitude: data.lat,
            longitude: data.lng,
            community_resource: data.community_resource,
            happy_count: data.happy_count,
            heart_count: data.heart_count,
            laughing_count: data.laughing_count,
            sad_count: data.sad_count,
            story_id: data.story_id,
            upvoteCount: 0,
            user_id: data.user_id
          });
          $scope.geo.push({
            latitude: data.lat,
            longitude: data.lng
          });
          return $scope.$emit("geo", $scope.geo);
        }
      }).error(function(data, status, headers, config) {
        return console.log("error");
      });
      $http({
        method: 'DELETE',
        url: 'http://ticknardif.pagekite.me/api/stories/5',
        cache: $templateCache
      }).success(function(data, status, headers, config) {
        console.log(data);
        console.log(status);
        return console.log(headers);
      }).error(function(data, status, headers, config) {
        return console.log("error");
      });
      return post_story = function() {
        return console.log($('.post input[name="subject"]').value());
      };
    }
  ]);

  angular.module("rant_that.services", []);

}).call(this);
