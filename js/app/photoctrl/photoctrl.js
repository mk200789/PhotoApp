'use strict';

var app = angular.module('PhotoAppControllers', []);

/*Controllers*/

app.controller("PhotoCtrl", function($scope, $http) {
	$http.get('js/photo.json').success(function(data){
		$scope.pictures = data;
		//$scope.pictures = data.splice(0,3); display the first 3 images
	});


});

app.controller('PhotoDetailCtrl',
	function($scope, $routeParams){
		$scope.photoId = $routeParams.photoId;
	});


