"use strict";

let TravelLog = angular.module('TravelLog', [
    'ngRoute',
]);

TravelLog.config(['$routeProvider', 
  function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/main.html',
            controller: 'MapController'
        })
        .when('/register', {
            templateUrl: 'partials/register.html',
            controller: 'RegisterController'
        })
        .when('/locationsList', {
            templateUrl: 'partials/locationsList.html',
            controller: 'MainController'
        })
        .otherwise('/');
  }

]);