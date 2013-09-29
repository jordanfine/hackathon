angular.module('rant_that',[
    'restangular'
    'ngResource'
	'rant_that.services'
	'rant_that.directives'
	'rant_that.controllers'
])

.config(['$routeProvider', 'RestangularProvider', '$httpProvider', ($routeProvider, RestangularProvider, $httpProvider) ->
    console.log 'hi'
    RestangularProvider.setBaseUrl 'http://ticknardif.pagekite.me'
   
    $httpProvider.defaults.useXDomain = true
    delete $httpProvider.defaults.headers.common['X-Requested-With']

    $routeProvider
        .when '/',
            templateUrl: './feed.html'
            controller: 'IndexCtrl'
        .when '/user/:userId',
            templateUrl: './user.html'
            controller: 'LoginCtrl'
])

.run(['$rootScope', 'Restangular', '$http', ($rootScope, Restangular, $http) ->
    console.log "hey"
    $rootScope.map = true
    $rootScope.geo = []

    $rootScope.$on "toggleMap", (req,res)->
        console.log "rs- toggleMap"
        console.log res
        $rootScope.map = res

    $rootScope.$on "addGeo", (req,res)->
        console.log res
        console.log "ADD GEO YO"
        $rootScope.geo.push(res)
        ##$rootScope.geo = res

    $rootScope.$watch "geo", (old,newer)->
        console.log "WATCH GEO"
        $rootScope.geo = newer
])
