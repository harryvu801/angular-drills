angular.module('app4').controller('mainCtrl', function($scope, service4){

  $scope.getPokemon = function (pokemon) {
    console.log('ctrlFn fired');
    service4.getData(pokemon).then(function(data) {
      console.log('got response from service');
      console.log(data);
      $scope.pokemon2 = data;
    })
  }
    // $scope.getPokemon();

})
