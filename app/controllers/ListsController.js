"use strict";

TravelLog.controller('ListsController', [
    '$http', 
    '$scope',
    // 'AuthFactory',

    function ($http, $scope) {

       $scope.restaurants = [];

       $http
            .get('http://localhost:5000/api/Restaurants')
            .success(r => $scope.restaurants = r);
            console.log("$scope.restaurants", $scope.restaurants);

        $scope.deleteRestaurant = function (id) {
            
            $http({
                method: "DELETE",
                url: `http://localhost:5000/api/Restaurants/${id}`
            })
            .then(
                () => console.log("Restaurant deleted"),
                () => console.log("Restaurant not deleted")
            );
        }
    }
]); 