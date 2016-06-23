"use strict";

TravelLog.controller('MainController', [
    '$http', 
    '$scope',
    // 'AuthFactory',

    function ($http, $scope) {

        console.log("function start");       
        $scope.map;
            var marker;
            var infowindow;
          function initMap() {
            $scope.map = new google.maps.Map(document.getElementById('map'), {
              center: {lat: 36.1868361, lng: -86.9253287},
              zoom: 8
            })
            }
            initMap();

        // $scope.restaurants = []; 
        // $scope.user = AuthFactory.getUser();

        // $http
        //     .get('http://localhost:5000/api/Restaurants')
        //     .success(r => $scope.restaurants = r);

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