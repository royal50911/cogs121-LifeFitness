// Create the Google Map…
var map;
var geocoder;

function initialize() {
  geocoder = new google.maps.Geocoder(); 
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: new google.maps.LatLng(32.75749,-117.2458),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });
}

d3.json("maps/sdcounty.json", function(data) {
  setPolygon(data.features,0);
});

function setPolygon(data,index) {
  if (index < data.length) {
    var color = '#'+Math.floor(Math.random()*16777215).toString(16);
      var path = data[index].geometry.coordinates[0];
        var address = data[index].properties.NAME;
        var coords = [];
        for (var j = 0; j < path.length; j++){
          coords.push(new google.maps.LatLng(path[j][1], path[j][0]));
        }
        var polygon = new google.maps.Polygon({
          paths: coords,
          strokeColor: "#0000000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: color,
          fillOpacity: 0.35
        });
        polygon.setMap(map);
        var contentString = '<div id="content">'+
          '<h1>' + address + '</h1>'+
          '<div>'+
          '<p><b>'+ address + '</b>' +
          '</div>'+
          '</div>';
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        google.maps.event.addListener(polygon, 'click', function(event) {
          infowindow.setPosition(event.latLng);   
          infowindow.open(map,polygon);
        });
        google.maps.event.addListener(polygon, 'mouseover', function() {
          //infowindow.open(map,polygon);
        });
        google.maps.event.addListener(polygon, 'mouseout', function() {
          //infowindow.close();
        });
    setPolygon(data,index+1); 
  }
}

google.maps.event.addDomListener(window, 'load', initialize);

(function() {
  $.getJSON( '/data')
    .done(function( data ) {
      console.log(data);
      var hosp = data.map(function(item){
        var num = item["Emergency Department Discharge No."];
        if (num == null) {
          num = 0;
        } else if (num == "<5") {
          num = 5;
        }
        return num;
      });
      hosp.unshift("Emergency Department Discharge No.");

      var chart = c3.generate({
        data: {
          columns: [
            hosp
          ],
          type: 'scatter'
        },
      });
    });
})();


