$(document).ready(function() {

  $('#submitWeather').click(function () {

    var city = $("#city").val();

    // Check if the user isn't trying to submit an empty field
    if(city != '') {

      $.ajax({

        url: "https://api.openweathermap.org/data/2.5/weather?q=city" + city + "&units=metric" + "&APPID=b3ee0bc115d56b20f8cfff47c8f1c551",
        type: "GET",
        dataType: "jsonp",
        success: function(data) {

          var widget = show(data);

          $("#show").html(widget);

          //Empty the field
          $("#city").val('');
        }

      });

    } else {
      $("#error").html("<div class='alert alert-danger' id='alertError'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Field cannot be empty</div>");
    }

  });


});

// Display results
function show(data) {

  return  "<h3 style='text-align:center; font-size:40px; font-weight:bold;'>Current Weather for " + data.name + ", " + data.sys.country + "</h3>" +
          "<h3><strong>Weather</strong>: " + data.weather[0].main + "</h3>" +
          "<h3><strong>Description</strong>: <img src='http://openweathermap.org/img/w/" +  data.weather[0].icon + ".png'> " + data.weather[0].description + "</h3>" +
          "<h3><strong>Temperature</strong>: " + data.main.temp + "&deg;C</h3>" +
          "<h3><strong>Pressure</strong>: " + data.main.pressure + " hPa</h3>" +
          "<h3><strong>Humidity</strong>: " + data.main.humidity + "%</h3>" +
          "<h3><strong>Min. Temperature</strong>: " + data.main.temp_min + "&deg;C</h3>" +
          "<h3><strong>Max. Temperature</strong>: " + data.main.temp_max + "&deg;C</h3>" +
          "<h3><strong>Wind Speed</strong>: " + data.wind.speed + "m/s</h3>" +
          "<h3><strong>Wind Direction</strong>: " + data.wind.deg + "&deg;</h3>";
}
