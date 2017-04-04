angular.module('app4').controller('mainCtrl', function($scope, service4){

  $scope.getStarters = function () {
    service4.getBulbasaur().then(function(data) {
      $scope.pokemon1 = data;
    });
    service4.getSquirtle().then(function(data) {
      $scope.pokemon2 = data;
    });
    service4.getCharmander().then(function(data) {
      $scope.pokemon3 = data;
    });

  }

  $scope.getStarters();

  $scope.start = function () {
    $scope.show = true;
  }


})
