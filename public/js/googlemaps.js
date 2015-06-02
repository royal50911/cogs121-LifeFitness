// Create the Google Map…
var map;
var geocoder;
var clicked = "";

function initialize() {
  geocoder = new google.maps.Geocoder(); 
  map = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 8,
    center: new google.maps.LatLng(32.95749,-116.9058),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });
}

d3.json("maps/sdcounty.json", function(data) {
  if (displaySideBar(data.features))
    setPolygon(data.features,0);
});

function displaySideBar(data) {
  data =  data.sort(function(a,b){
    return (a.properties.NAME > b.properties.NAME) ? 1 : ((a.properties.NAME < b.properties.NAME) ? -1 : 0);
  });
  for (var i in data) {
    var name = data[i].properties.NAME
    $('#sidebar').append("<div class='sidebarOption' id='side"+i+"' >"+name+"</div>");
  } 
  return true;
}

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
        var contentString = '<div class="infowindow">'+
          '<h1>' + address + '</h1>'+
          '<div>'+
          '<p><b>'+ address + '</b>' +
          '</div>'+
          '</div>';
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        google.maps.event.addListener(polygon, 'click', function(event) {
          $(clicked).css("background-color", "");
          $("#side"+index).css("background-color", "green");
          clicked ="#side"+index;
          infowindow.setPosition(event.latLng);   
          infowindow.open(map,polygon);
          //selectArea(address);
          //TODO: click event
        });
        google.maps.event.addListener(polygon, 'mouseover', function() {
          //TODO: mouseover event
        });
        google.maps.event.addListener(polygon, 'mouseout', function() {
          infowindow.close();
        });
    setPolygon(data,index+1); 
  }
}

google.maps.event.addDomListener(window, 'load', initialize);

function selectArea(address) {
  $.getJSON( '/data')
    .done(function( data ) {
      $.getJSON( 'maps/areaXY.json')
        .done(function( area ){
          var num = 0;
          for (var i in data) {
            if (area[data[i].Geography] == address) {
              console.log(data[i]["Emergency Department Discharge No."]);
              if (!data[i]["Emergency Department Discharge No."]){
                num += 0;
              } else if (data[i]["Emergency Department Discharge No."] == "<5") {
                num += 5;
              } else {
                num += parseInt(data[i]["Emergency Department Discharge No."]);
              }
            } 
          }
          $("#selectArea").html(num);
      });
  });
}

(function() {
  $.getJSON( '/data')
    .done(function( data ) {
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

$(document).ready(function() {
    var options = {
        enableGestures: true
    };
var controller = Leap.loop({enableGestures: true}, function(frame){
  if(frame.valid && frame.gestures.length > 0){
    frame.gestures.forEach(function(gesture){
        switch (gesture.type){
          case "circle":
              if(gesture.state == "stop")
              {
                console.log();
                map.setZoom(map.getZoom()-1);
                console.log("Circle Gesture");
              }
                
              break;
          case "keyTap":
              console.log("Key Tap Gesture");
              break;
          case "screenTap":
             if(gesture.state == "stop") {
              console.log(gesture.duration);
              map.setZoom(map.getZoom()+1);
              console.log(map.getZoom());
              console.log("screenTap");
             }
              break;
          case "swipe":
             var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
            //Classify as right-left or up-down
            if(gesture.state == "stop") {
            if(isHorizontal){
              if(gesture.duration > 150000) {
              if(gesture.direction[0] > 0){
                  console.log("right");
                  console.log(gesture.duration);
                  if(map.getZoom() < 10)
                    map.setCenter(new google.maps.LatLng(map.getCenter().A,map.getCenter().F-0.5));
                  else
                    map.setCenter(new google.maps.LatLng(map.getCenter().A,map.getCenter().F-0.05));
                  
              } else {
                  
                  console.log("left");
                  console.log(gesture.duration);
                  if(map.getZoom() < 10)
                    map.setCenter(new google.maps.LatLng(map.getCenter().A,map.getCenter().F+0.5));
                  else
                    map.setCenter(new google.maps.LatLng(map.getCenter().A,map.getCenter().F+0.05));
              }
             }
            } else { //vertical
              if(gesture.duration > 65000) {
              if(gesture.direction[1] > 0){
                  console.log("up");
                  console.log(gesture.duration);
                  if(map.getZoom() < 9)
                    map.setCenter(new google.maps.LatLng(map.getCenter().A - 0.5,map.getCenter().F));
                  else
                    map.setCenter(new google.maps.LatLng(map.getCenter().A - 0.04,map.getCenter().F));
              } else {
                  console.log("down");
                  console.log(gesture.duration);
                  if(map.getZoom() < 9)
                    map.setCenter(new google.maps.LatLng(map.getCenter().A + 0.5,map.getCenter().F));
                  else
                    map.setCenter(new google.maps.LatLng(map.getCenter().A + 0.04,map.getCenter().F));
              }                  
            }
            }
              }
              break;
        }
    });
  }
});
    var controller = Leap.loop(options, function(frame) {
        if (frame.hands.length > 0) {
            var hand = frame.hands[0];
            if (hand.grabStrength > 0.9) {
                //positions = hand.screenPosition();
                //map.setZoom(positions[2]);
                //map.setCenter(marker.getPosition());
                //console.log(hand.screenPosition());
                //map.panBy(x:number, y:number)
                //console.log(map.getCenter());
            }
        }
    }).use('screenPosition', {
        scale: 0.75
    });
});

