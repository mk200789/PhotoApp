'use strict';

var app = angular.module('PhotoAppControllers', []);

/*Controllers*/

app.controller("PhotoCtrl", function($scope, $http, $routeParams, $location) {

	//keeps track of whether if something is submitted or entered
	$scope.isSubmit = false;

	/*FILTERING CATEGORIES*/
	$scope.availableCategory= [];

	$scope.catFilter = null;

	$scope.init = function(){
		$http.get('js/photo.json').success(function(data){
			//console.log(data);

			$scope.pictures = data;

			angular.forEach(data, function(value,index){

				var exist = false;
				
				angular.forEach($scope.availableCategory, function(cat, index){
					if(value.category === cat)
					{
						exist = true;
					}
				});
				if(exist ===false){
				$scope.availableCategory.push(value.category);}				
			});
		});

		$scope.keepTrac = function(input)
		{
			$scope.tell = $scope.pictures[input-1].url;
		};

		$scope.grab = function(input)
		{
			$scope.passVal = input;
		};

		$scope.go = function(input)
		{
			console.log(input);
			$location.path(input);

		};


	};
	/* END OF FILTERING CATEGORIES*/	


	$scope.picturesId= $routeParams.picturesId;


	$scope.search = function(input){
		//check if something is submitted
		if($scope.isSubmit){
			$scope.searchResult=null;
			//check if submitted is not blank/empty
			if(input){
				$scope.searchResult = input;
				console.log($scope.searchResult);
			}
			//reset isSubmit to false

			$scope.isSubmit= false;
		}
	};	

	$scope.submit = function(){
			$scope.isSubmit = true;
	};
});


app.filter('isCategory',  function() {
    return function(input, category) {
       // console.log("input" + input);
        if (typeof category == 'undefined' || category == null) {
            return input;
        } else {
            var out = [];
            for (var a = 0; a < input.length; a++){
                    if(input[a].category == category) {
                        out.push(input[a]);
                    }

            }
            return out;
        }
    };
});