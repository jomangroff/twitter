angular.module('app')
  .service('mainService', function($http){

    this.getData = function(){
      return $http({
        method: 'GET',
        url: 'http://twitter.com/1.1/statuses/update.json'
      }).then(function(response){
        return response;
      })
    }

  });
