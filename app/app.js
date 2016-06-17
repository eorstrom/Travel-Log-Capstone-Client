"use strict";

let TravelLog = angular.module('TravelLog', [
    'ngRoute'
]);

TravelLog.config(['$routeProvider', 
  function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/main.html',
            controller: 'MainController'
        })
        .when('/register', {
            templateUrl: 'partials/register.html',
            controller: 'RegisterController'
        })
        .otherwise('/');
  }
]);