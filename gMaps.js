//This is the JS file for Google Maps

function createNewMarker(results){
    
    var marker = new google.maps.Marker({
    position: {
        lat: results.geometry.location.lat(),
        lng: results.geometry.location.lng()
    },
    map: map,
    icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=1|FF0000|000000',
    scaledSize: new google.maps.Size(90, 90)
    });
}



  var map;
  var center = new google.maps.LatLng(33.634919, -117.739538);
  
function initialize() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 12
    });
}

    //Add this to start working on marker information
    // var infowindow = new google.maps.InfoWindow({
    //   content: '<p>Marker Location:' + marker.getPosition() + '</p>'
    // });
    //
    // google.maps.event.addListener(marker, 'click', function() {
    //   infowindow.open(map, marker);
    // });


  google.maps.event.addDomListener(window, 'load', initialize);

  function searchCompany() {
      var service;
      var placeholderName = 'Cybercoders'
      var request = {
          location: center,
          radius: '50000',
          name: placeholderName
      };

      service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, logIt);
  }

function logIt(results, status) {
    console.log('this should be our results: ', results);
    createNewMarker(results[0]);
    //google's code
    // if (status == google.maps.places.PlacesServiceStatus.OK) {
    //     for (var i = 0; i < results.length; i++) {
    //         var place = results[i];
    //         createMarker(results[i]);
    //     }
    // }
}

function renderAllJobMarkers(){
      for(var i = 0; i < findJobs.jobData.length; i++){
          searchCompany(findJobs.jobData.results[i].company.display_name);
      }
}
