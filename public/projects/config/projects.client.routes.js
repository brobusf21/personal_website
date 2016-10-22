// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'example' module routes
angular.module('projects').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/projects', {
			templateUrl: 'projects/views/projects.client.view.html'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]); 
