angular.module('rant_that.directives')

.directive('rtFeed',[ ->
	template:"""
		<ul>
			<li ng-repeat="story in stories">
				{{story.name}} - {{story.story}}
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

])