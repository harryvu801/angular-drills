angular.module('app4').service('service4', function ($http) {

var baseURL ="http://pokeapi.co/api/v2/"
  this.getPokemon = function  () {
    console.log('sent rq to poke');
    return $http({
      method: 'GET',
      url: baseURL + 'pokemon'
    }).then(function (response) {
      console.log(response.status);
      if(response.status === 200) {
        console.log(response);
        return response.data.results

      }

    })
  }


})
