app.directive("addtop", function($compile){
	return function(scope, element, attrs){
		element.bind("click", function(){
			var domino = element.clone(),
				dataId = element.attr('data-id');
			angular.element(document.getElementById(dataId)).html('').append($compile(domino)(scope));			
		});
	};
});