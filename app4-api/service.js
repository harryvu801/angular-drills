angular.module('app4').service('service4', function ($http) {

  this.getBulbasaur = function () {
    return $http.get('http://pokeapi.co/api/v2/pokemon/1').then(function (response){
      if(response.status === 200){
      console.log('got a response');
      console.log(response);
      return response.data.sprites.front_default;
    }
    })
  }

  this.getSquirtle = function () {
    return $http.get('http://pokeapi.co/api/v2/pokemon/4').then(function (response){
      if(response.status === 200){
      return response.data.sprites.front_default;
    }
    })
  }

  this.getCharmander = function () {
    return $http.get('http://pokeapi.co/api/v2/pokemon/7').then(function (response){
      if(response.status === 200){
      return response.data.sprites.front_default;
    }
    })
  }

})
