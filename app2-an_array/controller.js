angular.module('arrayApp').controller('arrayController', function ($scope, service2) {

  $scope.myData = service2.getData();
  console.log($scope.data);


})
