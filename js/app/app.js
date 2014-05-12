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
			when('/photos/:photoId',{
				templateUrl: 'subsection/photo-detail.html',
				controller: 'PhotoDetailCtrl'
			}).
			when('/',{
				templateUrl: 'subsection/photo-content.html',
				controller: 'PhotoCtrl'
			}).
			when('#',{
				templateUrl: 'subsection/photo-content.html',
				controller: 'PhotoCtrl'
			}).			
			otherwise({
				redirectTo:'/photos'
			});
	}]);
