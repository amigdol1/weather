jQuery(document).ready(function($) {
  var state, city;

  $("form#weather_app").submit(function(event) {
    event.preventDefault();
    var zipcode = $('input#zipcode').val();
    var geourl = "http://api.wunderground.com/api/<access_token>/geolookup/q/"+zipcode+".json"
    console.log(geourl)

    $.ajax({
      url: geourl,
      dataType : "jsonp",
      success : function(parsed_json) {
        state = parsed_json['location']['city'];
        city  = parsed_json['location']['state'];
      }
    });


  });
});




// use a function with GET for the temperature based on city?
// need function for on click/entering in city hooks up to the api
