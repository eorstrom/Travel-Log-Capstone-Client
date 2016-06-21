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