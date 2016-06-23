"use strict";

// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initAutocomplete() {
var NashCoords = {lat: 36.174465, lng: -86.767960};
var map = new google.maps.Map(document.getElementById('map'), {
  center: NashCoords,
  zoom: 13,
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

// Create the search box and link it to the UI element.
var input = document.getElementById('pac-input');
var searchBox = new google.maps.places.SearchBox(input);
map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

// Bias the SearchBox results towards current map's viewport.
map.addListener('bounds_changed', function() {
  searchBox.setBounds(map.getBounds());
});

var markers = [];
// Listen for the event fired when the user selects a prediction and retrieve
// more details for that place.
searchBox.addListener('places_changed', function() {
  var places = searchBox.getPlaces();

  if (places.length == 0) {
    return;
  }

  // Clear out the old markers.
  markers.forEach(function(marker) {
    marker.setMap(null);
  });
  markers = [];

  // For each place, get the icon, name and location.
  var bounds = new google.maps.LatLngBounds();
  places.forEach(function(place) {
    var icon = {
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };

    // Create a marker for each place.
    markers.push(new google.maps.Marker({
      map: map,
      icon: icon,
      title: place.name,
      position: place.geometry.location
    }));

    if (place.geometry.viewport) {
      // Only geocodes have viewport.
      bounds.union(place.geometry.viewport);
    } else {
      bounds.extend(place.geometry.location);
    }
  });
  map.fitBounds(bounds);

    google.maps.event.addListener(map, "click", function (e) {
        var latLng = e.latLng;
        console.log("latLng", latLng);
    })

});




// document.querySelector('#pac-input').value = userInput;
// console.log("userInput");

// input.addEventListener('click', function () {
//     let userInput;
//     if (input.value != "") {
//         input.value = userInput;
//     }
//     console.log("userInput", userInput);
//     return userInput;
// });

// document.querySelector('#pac-input').addEventListener('keypress', function (e) {
//     let userInput;
//     var key = e.which || e.keyCode;
//     if (key === 13) { // 13 is enter
//       ('#pac-input').innerHTML = userInput;
//     }
//     console.log("userInput", userInput);
//     return userInput;
// });

// Add Marker
    // var marker = new google.maps.Marker({
    //     // position: NashCoords,
    //     map: map,
    //     // title: 'Hello World!'
    //     place: {
    //         placeId: results[0].place_id,
    //         location: results[0].geometry.location
    //     }
    // });
}

