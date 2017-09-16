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
        function isPalindrome() {
            var novaWord= {word: '', result: ''};

            if(leadingFormController.palindromeWord == null || leadingFormController.palindromeWord == ''){
              console.log('O campo word está vazio, por favor insira um valor valido.');
            }else{
              $http.get('http://localhost:3333/api/v0/palindrome/'+leadingFormController.palindromeWord).then(function(response) {
                novaWord.word = leadingFormController.palindromeWord;
                novaWord.result = "IS A PALINDROME"
                leadingFormController.wordsUsed.push(novaWord);
              },
              //onErro
              function(response){
                if(response.status == 400){
                  novaWord.word = leadingFormController.palindromeWord;
                  novaWord.result = "IS NOT A PALINDROME"
                  leadingFormController.wordsUsed.push(novaWord);
                }else{
                  console.log('Um erro inesperado ocorreu. Informe o administrador.');
                }
              }); 
            }
        };

        function teste() {
          console.log("Eu funciono!")
        };
      }
    ]
  });
