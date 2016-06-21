"use strict";

TravelLog.controller('CitySearchController', [
    '$http', 
    '$scope',
    'AuthFactory',

    function ($http, $scope, AuthFactory) {
        console.log("function start");       
        var map;
          function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
              center: {lat: 36.1868361, lng: -86.9253287},
              zoom: 8
            });
          }

          initMap();
    }

]);