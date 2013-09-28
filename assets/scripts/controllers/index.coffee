angular.module('rant_that.controllers', [])

.controller('IndexCtrl',[
	'$scope',
	'$rootScope'

	($scope, $rootScope) ->
		console.log "index ctrl"
])