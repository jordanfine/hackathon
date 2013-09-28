angular.module('rant_that.controllers', [])

.controller('IndexCtrl',[
	'$scope',
	'$rootScope'

	($scope, $rootScope) ->
		console.log "index ctrl"
		$scope.stories = $rootScope.stories

		$scope.$watch "stories", (old, newer)->
			$scope.stories = newer

			
])