'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
	 testem: {
		 main: {
			 src: [
				 'libs/*.js',
				 'libs/expect/*.js',
				 'libs/sinon/*.js',
				 'src/*.js',
				 'test/*.js',
			 ],
			 options: {
				 framework: 'mocha',
				 launch_in_ci: ['PhantomJS'],
				 launch_in_dev: []
			 }
		 }
	 },
	 watch: {
		 livereload: {
			 files: ['index.html', 'src/*.*', 'styles/*.*'],
			 options: {
				 livereload: true
			 }
		 }
	 },
	 connect: {
		 livereload: {
			 options: {
				 port: 8888
			 }
		 }
	 }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-testem');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('test', ['testem:run:main']);
  grunt.registerTask('test-ci', ['testem:ci:main']);
  grunt.registerTask('livereload', ['connect', 'watch']);
};
