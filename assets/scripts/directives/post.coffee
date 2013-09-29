angular.module('rant_that.directives')

.directive('rtPost',[ ->
	template:"""
		<form id="post-story">
			<div class="post">
				<input name="subject" type="text" placeholder="Subject Line..."/>
				<textarea placeholder="Enter message here..."></textarea>
				<div class="post-options">
					<i class="icon-compass"></i><i class="icon-image"></i>
					<button class="btn btn--primary" id="send_post" ng-click="post()">Rant That</button>
				</div>
			</div>
		</form>
		"""
	restrict: "A"
	link: (scope, element, attrs, ctrl) ->		
		## initial
		##ADD DOM ELEMENT TO POST A STORY
		console.log scope
		story = {}
		storyId = Math.floor((Math.random()*100)+1);
		scope.post = () ->
			subject = $('.post input[name="subject"]').val()
			post = $('.post textarea').val()
			date = new Date()
			user = 2
			username = "Fabiola"
			community_resource = false

			story = {
				user: user
				username: username
				subject: subject
				story_text: post
				time: date
				community_resource: community_resource
				happy_count: 0
				heart_count: 0
				laughing_count: 0
				sad_count: 0
				story_id: storyId++
				upvoteCount: 0
			}

			if(subject != '' && post != '')
				scope.$broadcast "postStory", story

			$('.post input[name="subject"]').val('')
			$('.post textarea').val('')


])