var app = angular.module('MyApp');

app.controller('dininoPageCtrl', ['$scope', '$http', '$window', function ($scope, $http, $window) {  
	var count = 0;
	$scope.scale = 1;
	$scope.speed = 0.2;
	$scope.transform = "rotate(0deg)";	

	$scope.rotateBack = function(){
		count-=90;		
		$scope.transform = "rotate("+count+"deg)";
	}
	$scope.rotateForward = function(){
		count+=90;
		$scope.transform = "rotate("+count+"deg)";
	}
}]);