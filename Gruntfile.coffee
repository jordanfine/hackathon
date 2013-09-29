## Grunt File for Hackathon
## Jordan Fine 

module.exports = (grunt) ->
	grunt.initConfig
		##will read in dependencies from package file
		pkg: grunt.file.readJSON('package.json'),

		coffee: 
			app:
				src: 'assets/_rant_that.coffee' 
				dest: 'public/js/rant_that.js'

		rig: 
			app: 
				files: 'assets/_rant_that.coffee' : ['assets/scripts/rant_that.coffee']
			vendor:
				files: 'public/js/vendor.js' : ['assets/scripts/vendor.js']

		watch: 
			app: 
				files: ['assets/scripts/******/*.coffee','assets/scripts/*.coffee' ]
				tasks: ['build_app']
			css_app:
				files: ['assets/styles/**/**.styl']
				tasks: ['build_css']
				options:
					livereload: true
			html:
				files: ['views/**/*.jade']	
				tasks: ['build_html']
		copy:
			images:
				files: [
					expand: true
					cwd: 'assets/images'
					src: '**'
					dest: 'public/img/'
				]
			fonts:
				files: [
					expand: true
					cwd: 'assets/fonts'
					src: '**'
					dest: 'public/fonts/'
				]
			app:
				files: [
					expand: true
					cwd: 'public'
					src: '**'
					dest: 'app/public'
				]
			index:
				files: [
					expand: true
					src: 'index.html'
					dest: 'app'
				]
			feed:
				files: [
					expand: true
					src: 'feed.html'
					dest: 'app'
				]
			user:
				files: [
					expand: true
					src: 'user.html'
					dest: 'app'
				]
		jade:
			compile:
				files: 
					'index.html':'views/layout.jade'
					'user.html' : 'views/user/user.jade'
					'login.html' : 'views/login/login.jade'
					'feed.html' : 'views/feed.jade'

		stylus:
			css_app:
				src: ['assets/styles/app.styl']
				dest: 'public/css/<%= pkg.name %>.css'

		cssmin:
			css_app:
				src: ['<%=stylus.css_app.dest%>']
				dest: 'public/css/<%= pkg.name %>.min.css'	
		
		uglify:
			app:
				src: ['public/js/rant_that.js']
				dest: 'public/js/rant_that.min.js'
			vendor:
				src: ['public/js/vendor.js']
				dest: 'public/js/vendor.min.js'

		clean: 
			public: ['public/*']
			app: 'assets/_rant_that.coffee'

	##This is where you'll load in the tasks for grunt
	grunt.loadNpmTasks('grunt-contrib-coffee')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-contrib-clean')
	grunt.loadNpmTasks('grunt-contrib-stylus')
	grunt.loadNpmTasks('grunt-contrib-cssmin')
	grunt.loadNpmTasks('grunt-contrib-uglify')
	grunt.loadNpmTasks('grunt-contrib-jade')
	grunt.loadNpmTasks('grunt-contrib-copy')
	grunt.loadNpmTasks('grunt-rigger')

	##This is where you will register the tasks
	## Run REBUILD task when you switch branches, this will make sure everything is FRESHHHH
	grunt.registerTask('default', ['coffee'])
	grunt.registerTask('build_app', ['rig:app','coffee:app', 'uglify:app', 'clean:app'] )
	grunt.registerTask('build_css',['stylus:css_app', 'cssmin:css_app'])
	grunt.registerTask('build_html',['jade:compile'])
	grunt.registerTask('build_img',['copy:images'])
	grunt.registerTask('build_deploy', ['copy:app','copy:index','copy:user','copy:feed'])
	grunt.registerTask('build_fonts',['copy:fonts'])
	grunt.registerTask('build_vendor', ['rig:vendor', 'uglify:vendor'])
	grunt.registerTask('rebuild', ['clean:public', 'build_app', 'build_css', 'build_vendor', 'build_img', 'build_fonts', 'build_deploy'])

