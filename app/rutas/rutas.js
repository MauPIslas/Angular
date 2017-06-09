(function(){
  'use strict'

  angular
  .module("Practica")
  .config(config)

  function config($routeProvider){
    $routeProvider
    .when('/absolution',{
      template: "<practica-absolution></practica-absolution>"
    })
    .when('/',{
      template: "<practica-component></practica-component>"
    })
    .when('/paramore',{
      template: "<practica-componentp></practica-componentp>"
    })
    .when('/about',{
      template: "<practica-about></practica-about>"
    })
  }
})();
