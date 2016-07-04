"use strict";

let TravelLog = angular.module('TravelLog', [
    'ngRoute',
]);

TravelLog.config(['$routeProvider', 
  function ($routeProvider) {
    $routeProvider
        .when('/register', {
            templateUrl: 'partials/register.html',
            controller: 'RegisterController'
        })
        .when('/locationsList', {
            templateUrl: 'partials/locationsList.html',
            controller: 'ListsController'
        })
        .otherwise('/');
  }

]);