angular.module('rant_that.directives')

.directive('rtFeed',[ ->
	template:"""
		<ul>
			<li ng-repeat="story in stories | orderBy: 'time':true">
				<div class="user_pic">
					<img src="public/img/fabiola.jpg"></img>
					<a href="#/user/{{story.user_id}}" class="name">{{story.username}}</a>
				</div>
				<div class="feed_post">
					<div class="feed_post-subject">
						<h2>{{story.subject}}</h2>
						<span ng-show="story.community_resource" class="badge commresource">community resource</span>
						<br/>
						<span class="timestamp">posted at {{story.time | date:'shortTime'}} on {{story.time | date:'mediumDate'}}</span>
					</div>
					<div class="feed_post-story">
						<p>{{story.story_text}}</p>
						<ul class="hashtags">
							<li class="hashtag" ng-repeat="hashtag in story.hashtags">{{hashtag}}</li>
						</ul>
					</div>
					<div class="feed_post-icons">
						<i class="icon-heart" ng-click="upHeart(story)"></i>{{story.heart_count}}
						<i class="icon-smiley" ng-click="upHappy(story)"></i>{{story.happy_count}}
						<i class="icon-sad" ng-click="upSad(story)"></i>{{story.sad_count}}
						<i class="icon-grin" ng-click="upLaughing(story)"></i>{{story.laughing_count}}
					</div>
				</div>
				<div class="comments">


				<div>
			</li>

		</ul>
		"""
	scope:
		stories: "=stories"
	restrict: "A"
	link: (scope, element, attrs, ctrl) ->		
		## initial
		##ADD DOM ELEMENT TO POST A STORY
		post = ->
			console.log "post story"

		scope.$on "changedstories", (req,res)->
			console.log "over here"
			scope.stories = res

		scope.upHeart = (story)->
			console.log story.upvoteCount
			if story.upvoteCount ==0
				for s, i in scope.stories
					if s.story_id == story.story_id
						scope.stories[i].heart_count = scope.stories[i].heart_count + 1
						scope.stories[i].upvoteCount = scope.stories[i].upvoteCount + 1
						return true
		scope.upHappy = (story)->
			if story.upvoteCount ==0
				for s, i in scope.stories
					if s.story_id == story.story_id
						scope.stories[i].happy_count = scope.stories[i].happy_count + 1
						scope.stories[i].upvoteCount = scope.stories[i].upvoteCount + 1
						return true
		scope.upSad = (story)->
			if story.upvoteCount ==0
				for s, i in scope.stories
					if s.story_id == story.story_id
						scope.stories[i].sad_count = scope.stories[i].sad_count + 1
						scope.stories[i].upvoteCount = scope.stories[i].upvoteCount + 1
						return true
		scope.upLaughing = (story)->
			if story.upvoteCount ==0
				for s, i in scope.stories
					if s.story_id == story.story_id
						scope.stories[i].laughing_count = scope.stories[i].laughing_count + 1
						scope.stories[i].upvoteCount = scope.stories[i].upvoteCount + 1
						return true



])