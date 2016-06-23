"use strict";

TravelLog.controller("UserInputController",
[
  "$scope",
  "$http",

  function ($scope, $http)  {   

    // Default property values for keys bound to input fields
    $scope.restaurant = {
        Name: "",
        Address: "",
        Visited: false,
        CityId: 1
    };

        $scope.addRestaurant = function () {
            console.log("addRestaurant button was clicked", $scope.restaurant);
          $scope.restaurant.CreatedDate = new Date();
          console.log($scope.restaurant.CreatedDate);
          $http({
            url:'http://localhost:5000/api/Restaurants',
            method: 'POST',
            data: JSON.stringify($scope.restaurant)
          })
          .success(newRestaurant => console.log('201 Created', newRestaurant))
        };
    }
]);