'use strict';

var app = angular.module('PhotoAppControllers', []);

/*Controllers*/

app.controller("PhotoCtrl", function($rootScope, $http, $routeParams) {

	
	$http.get('js/photo.json').success(function(data){
		$rootScope.pictures = data;
		//$scope.pictures = data.splice(0,3); display the first 3 images

	});


	$rootScope.picturesId= $routeParams.picturesId;

	$rootScope.keepTrac = function(input)
	{
		$rootScope.tell = $rootScope.pictures[input-1].url;
	};



});

/*app.controller('PhotoDetailCtrl',
	function($scope, $routeParams){
		$scope.photoId = $routeParams.photoId;

	});
*/