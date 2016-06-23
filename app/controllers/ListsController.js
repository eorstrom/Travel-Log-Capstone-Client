"use strict";
console.log("ListsController");

TravelLog.controller('ListsController', [
    '$http', 
    '$scope',
    // 'AuthFactory',

    function ($http, $scope) {

       $scope.restaurants = [];
       console.log("$scope.restaurants", $scope.restaurants); 

       $http
            .get('http://localhost:5000/api/Restaurants')
            .success(r => $scope.restaurants = r);
    }
]); 