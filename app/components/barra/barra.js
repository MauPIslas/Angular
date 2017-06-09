(function(){
  'use strict'
  var componentb = {
    controller: componentCtrl,
    templateUrl:'app/components/barra/barra.html'
  }
  angular.module("Practica")
    .component("practicaComponentb", componentb)
    function componentCtrl(){
      var bar = this;
      bar.inicio= "Inicio"
      bar.menu = "menu"

    }
})();
