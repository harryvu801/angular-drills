angular.module('app2').controller('mainCtrl', function ($scope, service2) {

  $scope.data = service2.getData();


})
