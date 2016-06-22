"use strict";

TravelLog.controller('MainController', [
    '$http', 
    '$scope',
    'AuthFactory',

    function ($http, $scope, AuthFactory) {

        $scope.cities = [];
        $scope.user = AuthFactory.getUser();

        // $scope.filterField = '';
        // $scope.filterText = '';

        console.log("function start");       
        $scope.map;
          function initMap() {
            $scope.map = new google.maps.Map(document.getElementById('map'), {
              center: {lat: 36.1868361, lng: -86.9253287},
              zoom: 8
            });
          }

        initMap();

        $http
            .get('http://localhost:5000/api/Cities')
            .success(inv => $scope.cities = inv);

        $scope.deleteCity = function (id) {
            $http({
                method: "DELETE",
                url: `http://localhost:5000/api/Cities/${id}`
            })
            .then(
                () => console.log("City deleted"),
                () => console.log("City not deleted")
            );
        }
    }

]);