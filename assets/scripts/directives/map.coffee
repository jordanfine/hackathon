angular.module('rant_that.directives')

.directive('rtMap',[ ->
	template:"""
		<div id="map-canvas"></div>
		"""
	scope:
		geo: "=geo"
	restrict: "A"
	link: (scope, element, attrs, ctrl, rootScope) ->		
		## initial
		map = new google.maps.Map document.getElementById('map-canvas')
		markers = []
		## DOM READY
		$ ->	
			google.maps.event.addDomListener(window, 'load', initialize)

		scope.$on "geo", (req,res)->
			console.log res

		scope.$watch "geo", (old, newer)->
			scope.geo = newer
			console.log "geo new"

		initialize = ->
			geo = [{
					latitude: 29.9667 
					longitude: -90.0500
					community_resource: true
				},{
					latitude: 29.9242 
					longitude: -90.0123
					community_resource: false
				},{
					latitude: 29.90534
					longitude: -90.2234
					community_resource: false
				},{
					latitude: 29.7234
					longitude:-90.1343
					community_resource: true
				},{
					latitude: 29.82645
					longitude:-90.093432
					community_resource: true
				}]
			
			mapOptions = 
				zoom: 9
				center: new google.maps.LatLng(29.9667 , -90.0500)
				mapTypeId: google.maps.MapTypeId.ROADMAP

			map.setOptions(mapOptions)

			for geoLoc,i in geo
				markers[i] = new google.maps.Marker()
				markerOptions = 
					map: map
					position: new google.maps.LatLng(geoLoc.latitude, geoLoc.longitude)
					title: 'Hello World!'
					animation: google.maps.Animation.DROP
				markers[i].setOptions(markerOptions)
				console.log markers[i]


])