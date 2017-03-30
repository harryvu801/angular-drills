angular.module('app4').controller('mainCtrl', function($scope,service4) {

  $scope.getPokemon = function() {
    console.log('ctrlfn working');
    service4.getPokemon().then(function (response){
      console.log('ctrlprm sent');
      $scope.pokemon = response;
    })
  }
  $scope.getPokemon();
})
