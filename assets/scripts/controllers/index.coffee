angular.module('rant_that.controllers')

.controller('IndexCtrl',[
	'$scope',
	'$rootScope',
	'Restangular',
	'$http',
	'$templateCache',

	($scope, $rootScope, Restangular, $http, $templateCache) ->
		resize = ->
			feedHeight = $(window).height() - 360	
			$('.l-feed').css
				"height":""+feedHeight+"px"	

		$ ->
			resize()
			$(window).on "resize", resize
			$('#send_post').on "click", post_story

		console.log "index ctrl"
		$scope.stories = []

		$scope.geo = []

		$scope.map = true

		$scope.$on "postStory", (req,res)->
			$scope.stories.push(res)
			$scope.$broadcast "changedstories", $scope.stories

		$scope.$watch "stories", (old, newer)->
			console.log "changed story"
			console.log old
			console.log newer
			$scope.stories = newer

		$scope.$watch "geo", (old, newer)->
			console.log old
			console.log newer
			$scope.geo = newer

		$http({method: 'GET', url: 'http://ticknardif.pagekite.me/stories/', cache: $templateCache}).
			success((data, status, headers, config) ->
				console.log data
				if data.items
					console.log data.items
					for story,i in data.items
						$scope.stories.push({
							user: story.user_id
							username: story.username
							subject: story.subject
							story_text: story.story_text
							time: new Date(story.posted_time)
							latitude: story.lat 
							longitude: story.lng
							community_resource: story.community_resource
							happy_count: story.happy_count
							heart_count: story.heart_count
							laughing_count: story.laughing_count
							sad_count: story.sad_count
							story_id: story.story_id
							upvoteCount: 0
							user_id: story.user_id
							hashtags: story.hash_tags.split(",")
						})

						$scope.geo.push({
							latitude: story.lat
							longitude: story.lng
						})
					$scope.$broadcast "geo", $scope.geo
				else
					console.log data
					$scope.stories.push({
						user: data.user_id
						username: story.username
						subject: data.subject
						story_text: data.story_text
						time: data.posted_time
						latitude: data.lat 
						longitude: data.lng
						community_resource: data.community_resource
						happy_count: data.happy_count
						heart_count: data.heart_count
						laughing_count: data.laughing_count
						sad_count: data.sad_count
						story_id: data.story_id
						upvoteCount: 0
						user_id: data.user_id
					})

					$scope.geo.push({
						latitude: data.lat
						longitude: data.lng
					})
					$scope.$emit "geo", $scope.geo
			).
		
			error((data, status, headers, config) ->
				console.log "error"

			)

		$http({method: 'DELETE', url: 'http://ticknardif.pagekite.me/api/stories/5', cache: $templateCache}).
			success((data, status, headers, config) ->
				console.log data
				console.log status
				console.log headers
			).
		
			error((data, status, headers, config) ->
				console.log "error"

			)

		post_story = ->
			console.log $('.post input[name="subject"]').value()


])