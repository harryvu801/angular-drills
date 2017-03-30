angular.module('app3').controller('mainCtrl', function($scope, service3) {

  $scope.data = service3.getData();
})
