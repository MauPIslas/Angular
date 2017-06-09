(function(){
  'use strict'
  var componentFooter = {
    controller: componentCtrl,
    templateUrl:'app/components/footer/footer.html'
  }
  angular.module("Practica")
    .component("practicaFooter", componentFooter)
    function componentCtrl(){
      // var com = this;
      // com.song= "absolution"
      // com.singer = "Muse"

    }
})();
