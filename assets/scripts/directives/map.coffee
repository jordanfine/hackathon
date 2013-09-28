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

		## DOM READY
		$ ->	
			google.maps.event.addDomListener(window, 'load', initialize)

		initialize = ->
			mapOptions = 
				zoom: 15
				center: new google.maps.LatLng(29.6520, -82.3250)
				mapTypeId: google.maps.MapTypeId.ROADMAP

			map.setOptions(mapOptions)

])