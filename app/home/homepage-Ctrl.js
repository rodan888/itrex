var app = angular.module('MyApp');

app.controller('homePageCtrl', ['$scope', '$http', '$window','childData', function ($scope, $http, $window, childData) {  

	$scope.childList = function(){
    	childData.getchild.then(function(data){
        	$scope.classList = data;        	 
	   	});
	 }();

	//Tabs
	$scope.tab = '8784hb';
    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };
    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };

    //Class
    $scope.addClass = function(){
    	var newClass = {"className": "New Class",
		  "classId": $scope.classList.length+1,
		  "classList": []
		};
		$scope.classList.push(newClass);
    };
    $scope.removeClass = function(ind){
    	$scope.classList.splice( ind, 1 );
    	$scope.tab = '8784hb';
    };

    //Child List
	$scope.name;
	$scope.grade;
	$scope.addChild = function(list){
		var newChild = {
			"childName": $scope.name,			
  			"childGrade": $scope.grade
		};
		list.classList.push(newChild);		
	};
	$scope.childG = function(grade){
		$scope.grade = grade;		
	};
	$scope.childN = function(name){		
		$scope.name = name;
	};

	$scope.removeChild = function(ind, list){
		list.classList.splice( ind, 1 );				
	};	 

	$scope.averageGrade = function(list){		
		var childLength = list.classList.length,
			sum = 0,
			avg;
		for(var i = 0; i<childLength; i++){
			sum += +list.classList[i].childGrade;			
		};
		if(childLength>0){
			avg = sum/childLength;
		}else{
			avg = 0
		}
		return avg.toFixed(2);				
	};

}]);