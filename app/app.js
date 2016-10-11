var app = angular.module('MyApp', ['ngRoute', 'ngAnimate', 'ngMap', 'ngResource']);

	app.config(['$routeProvider', '$httpProvider',function ($routeProvider, $httpProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'home/home.html',
			controller: 'homePageCtrl',
			animation: 'first'
		}).when('/calculator', {
			templateUrl: 'calculator/calculator.html',
			controller: 'calcPageCtrl',
			animation: 'first'
		}).when('/domino', {
			templateUrl: 'domino/domino.html',
			controller: 'dininoPageCtrl',
			animation: 'first'
		})
		.otherwise({
	      redirectTo: '/'
	    });
	}]);

	app.controller('animateCtrl', function($scope, $rootScope){
		$rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
			$rootScope.animation = currRoute.animation;
		});
	});