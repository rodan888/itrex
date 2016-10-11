app.directive('navigation', navigation);
  function navigation () {
    return {
      restrict: 'EA',
      templateUrl: 'components/navigation/navigation.template.html'      
    };
  }