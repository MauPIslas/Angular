(function(){
  'use strict'
  var component = {
    controller: componentCtrl,
    templateUrl:'app/components/muse/muse.html'
  }
  angular.module("Practica")
    .component("practicaComponent", component)
    function componentCtrl(){
      var com = this;
      com.song= "absolution"
      com.singer = "Muse"


    }
})();
