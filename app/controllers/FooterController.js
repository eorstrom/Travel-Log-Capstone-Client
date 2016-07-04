"use strict";

TravelLog.controller("FooterCtrl", ["$scope", 

    function($scope) {
        $scope.date = new Date();
        $scope.date.getFullYear();
        return $scope.date;
}]);