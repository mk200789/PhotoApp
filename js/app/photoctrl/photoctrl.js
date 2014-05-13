'use strict';

var app = angular.module('PhotoAppControllers', []);

/*Controllers*/

app.controller("PhotoCtrl", function($scope, $http, $routeParams) {
	$http.get('js/photo.json').success(function(data){
		$scope.pictures = data;
		$scope.kitty="this is kitty";
		//$scope.pictures = data.splice(0,3); display the first 3 images		
	});
	$scope.expandImg = false;
	$scope.picturesId= $routeParams.picturesId;

	$scope.keepTrac = function(input)
	{
		$scope.tell = $scope.pictures[input-1].url;
	}


});

/*app.controller('PhotoDetailCtrl',
	function($scope, $routeParams){
		$scope.photoId = $routeParams.photoId;

	});
*/