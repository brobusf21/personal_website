// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'example' module routes
angular.module('index').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'index/views/index.client.view.html'
		}).

		when('/about', {
			templateUrl: 'index/views/about.client.view.html'
		}).
		when('/projects', {
			templateUrl: 'index/views/projects.client.view.html'
		}).
		when('/blog', {
			templateUrl: 'index/views/blog.client.view.html'
		}).
		when('/resume', {
			templateUrl: 'index/views/resume.client.view.html'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]); 
