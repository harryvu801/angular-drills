angular.module('app3').controller('mainCtrl', function($scope,service3){

  $scope.employees = service3.getData();

})
