angular.module('app')
  .controller('mainCtrl', function($scope, mainService){

    $scope.getData = mainService.getData()
    .then(function(response){
      $scope.twitter = response;
    });

  });
