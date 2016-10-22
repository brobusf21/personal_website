// Invoke 'strict' JavaScript mode
'use strict';

// Configure the blog module routes
angular.module('blog').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/blog', {
			templateUrl: 'blog/views/blog.client.view.html'
		}).
		when('/blog/unixshell', {
			templateUrl: 'blog/views/articles/unixshell.client.view.html'
		}).
		when('/blog/herokudeploy', {
			templateUrl: 'blog/views/articles/herokudeploy.client.view.html'
		}).
		when('/blog/grep', {
			templateUrl: 'blog/views/articles/grep.client.view.html'
		}).
		when('/blog/mlab', {
			templateUrl: 'blog/views/articles/mlab.client.view.html'
		}).
		when('/blog/logistics-business', {
			templateUrl: 'blog/views/articles/logistics-business.client.view.html'
		}).
		when('/blog/moving-to-austin', {
			templateUrl: 'blog/views/articles/moving-to-austin.client.view.html'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]); 
