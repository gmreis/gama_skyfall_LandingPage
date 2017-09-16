'use strict';

// Register `leadingForm` component, along with its associated controller and template
angular.
  module('leadingForm').
  component('leadingForm', {
    templateUrl: 'leading-form/leading-form.template.html',
    controllerAs: "leadingCtrl",
    controller: ['$http',
      function LeadingFormController($http) {
        var leadingFormController = this;

        leadingFormController.user = null;

        //Verifica se a palavra é palindromo.
        function sendUser() {
              $http.post('http://localhost:3003/participantes/'+user).then(function(response) {
                // leadingFormController.wordsUsed.push(novaWord);s
              },
              //onErro
              function(response){
                  console.log('Um erro inesperado ocorreu. Informe o administrador.');
              }); 
        };

        function teste() {
          console.log("Eu funciono!")
        };
      }
    ]
  });
