// UNFINISHED

$(document).ready(function() {
var long;
var lat;
var temp;
if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {

    long = position.coords.longitude;
    lat = position.coords.latitude;


var api = "link here"; //input link api

$.getJSON(api, function(data){
  var weatherType = data.weather[0].description;
  var kelvin = data.main.temp;
  var windSpeed = data.wind.speed;
  var city = data.name;

  console.log(city);
  console.log(api);
});
  
}); // current position
}
});
