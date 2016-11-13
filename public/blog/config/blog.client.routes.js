// Invoke 'strict' JavaScript mode
'use strict';

// Configure the blog module routes
angular.module('blog').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/blog', {
			templateUrl: 'blog/views/blog.client.view.html'
		}).
		when('/blog/technology', {
			templateUrl: 'blog/views/articles/technology/blog-tech-index.client.view.html'
		}).
		when('/blog/cycling', {
			templateUrl: 'blog/views/articles/cycling/blog-cycling-index.client.view.html'
		}).
		when('/blog/lifestyle', {
			templateUrl: 'blog/views/articles/lifestyle/blog-lifestyle-index.client.view.html'
		}).
		when('/blog/business', {
			templateUrl: 'blog/views/articles/business/blog-business-index.client.view.html'
		}).
		when('/blog/technology/unixshell', {
			templateUrl: 'blog/views/articles/technology/unixshell.client.view.html'
		}).
		when('/blog/technology/heroku', {
			templateUrl: 'blog/views/articles/technology/heroku.client.view.html'
		}).
		when('/blog/technology/grep', {
			templateUrl: 'blog/views/articles/technology/grep.client.view.html'
		}).
		when('/blog/technology/mlab', {
			templateUrl: 'blog/views/articles/technology/mlab.client.view.html'
		}).
		when('/blog/business/logistics-business', {
			templateUrl: 'blog/views/articles/business/logistics-business.client.view.html'
		}).
		when('/blog/lifestyle/moving-to-austin', {
			templateUrl: 'blog/views/articles/lifestyle/moving-to-austin.client.view.html'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]); 
