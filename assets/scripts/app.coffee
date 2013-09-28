angular.module('rant_that',[
	'rant_that.services'
	'rant_that.directives'
	'rant_that.controllers'
])

.config(['$routeProvider', ($routeProvider) ->
	$routeProvider
		.when '/',
			templateUrl: 'index'
			controller: 'IndexCtrl'

		.when '/***',
			templateUrl: 'index'
			controller: 'IndexCtrl'
])

.run(['$rootScope', ($rootScope) ->
	console.log "app.coffee run"
])