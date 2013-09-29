angular.module('rant_that.controllers')

.controller('LoginCtrl',[
	'$scope',
	'$rootScope',
	'$templateCache',
	'$http',

	($scope, $rootScope, $templateCache, $http) ->
		$scope.map = false
		console.log "login ctrl"
		$scope.stories = $rootScope.stories

		$scope.$watch "stories", (old, newer)->
			$scope.stories = newer

		$scope.$emit "toggleMap", false

		$scope.userId =  window.location.hash.slice(7)

		$http({method: 'GET', url: 'http://ticknardif.pagekite.me/users/'+$scope.userId+'', cache: $templateCache}).
			success((data, status, headers, config) ->
				$scope.user= {
					username: data.username
					age: data.age
					gender: data.gender


				}					
			).
		
			error((data, status, headers, config) ->
				console.log "error"

			)
			
])