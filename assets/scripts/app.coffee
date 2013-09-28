angular.module('rant_that',[
    'restangular'
	'rant_that.services'
	'rant_that.directives'
	'rant_that.controllers'
])

.config(['$routeProvider', 'RestangularProvider', ($routeProvider, RestangularProvider) ->
    console.log 'hi'
    RestangularProvider.setBaseUrl 'ticknardif.pagekite.me/api'
    $routeProvider
        .when '/',
            templateUrl: 'index'
            controller: 'IndexCtrl'

        .when '/***',
            templateUrl: 'index'
            controller: 'IndexCtrl'
])

.run(['$rootScope', 'Restangular', ($rootScope, Restangular) ->
    baseStories = Restangular.all('stories')
    $rootScope.allStories = baseStories.getList()
    console.log $rootScope.allStories
])
