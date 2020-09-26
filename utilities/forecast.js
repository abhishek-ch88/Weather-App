const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=823703eb293daa00fd4e4e082e133956&units=metric"
  request({ url: url, json: true }, function (error, response, { message, main, weather }) {
    if (error) {
      callback("Error connecting , check your internet connection", undefined);
    } else if (message) {
      callback('Unable to find the location', undefined)
    } else {
      callback(undefined, weather[0].description + " , " + "It is currently " + main.temp + " degree celcius but it feels like " + main.feels_like + " and min and maximum temperatures are " + main.temp_min + " and " + main.temp_max + " degree celcius respectively");
    }
  })
}

module.exports = forecast