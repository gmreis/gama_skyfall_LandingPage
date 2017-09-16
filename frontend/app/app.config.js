'use strict';

angular.
  module('leadingApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/leadingPage', {
          template: '<leading-form></leading-form>'
        }).
        otherwise('/leadingPage');
    }
  ]);
