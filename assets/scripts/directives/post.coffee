angular.module('rant_that.directives')

.directive('rtPost',[ ->
	template:"""
		<form id="post-story">
			<div class="post">
				<input name="subject" type="text" placeholder="Subject Line..."/>
				<textarea placeholder="Enter message here..."></textarea>
				<div class="post-options">
					<i class="icon-compass"></i><i class="icon-image"></i>
				</div>
			</div>
		</form>
		"""
	restrict: "A"
	link: (scope, element, attrs, ctrl) ->		
		## initial
		##ADD DOM ELEMENT TO POST A STORY
		post = ->
			console.log "post story"

])