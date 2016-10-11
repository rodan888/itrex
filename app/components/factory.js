app.factory("childData", ['$http', function($http) {
	var child;
    return {
        getchild: (function(response) {
            return $http.get('test-start.json')
            .then(function(response) {            	
              return response.data;
            });
        })()
    };
    return childData;
}]);