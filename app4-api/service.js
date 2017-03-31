angular.module('app4').service('service4', function ($http) {

  this.getData = function (pokemon) {
    return $http.get('http://pokeapi.co/api/v2/pokemon/' + pokemon).then(function (response){
      if(response.status === 200){
      console.log('got a response');
      console.log(response);
      return response.data.sprites.front_default;
    }else {
      console.log('error');
    }
    })
  }

})
