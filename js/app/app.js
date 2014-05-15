'use strict';

var app = angular.module('PhotoApp', [
	'ngRoute',
	'PhotoAppControllers'
]);

app.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/photos',{
				templateUrl: 'subsection/photo-content.html',
				controller: 'PhotoCtrl'
			}).	
			when('/photos/:picturesId', {
				templateUrl: 'subsection/photo-detail.html',
				controller: 'PhotoCtrl' //'PhotoDetailCtrl'
			}).
			when('/',{
				templateUrl: 'subsection/photo-content.html',
				controller: 'PhotoCtrl'
			}).
			when('/about',{
				templateUrl: 'subsection/about.html'
			}).
			when('/contact',{
				templateUrl: 'subsection/contact.html',
				controller: 'PhotoCtrl'
			}).
			when('/testfilter',{
				templateUrl: 'subsection/testfilter.html'
			}).
			otherwise({
				redirectTo:'/photos'
			});
	}]);
