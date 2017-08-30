var axios = require('axios');

var BASE_URL = 'http://api.openweathermap.org/data/2.5/';
var API_KEY = 'b714ec74bbab5650795063cb0fdf5fbe';

module.exports = {
  fetchCurrentWeather: function (city) {
    var encodedURI = window.encodeURI(BASE_URL + 'weather?q=' + city + '&type=accurate&APPID=' + API_KEY);

    return axios.get(encodedURI)
      .then(function (response) {
        console.log(response);
      })
  },
  fetchWeatherForecast: function (city) {
    var encodedURI = window.encodeURI(BASE_URL + 'forecast/daily?q=' + city + '&type=accurate&APPID=' + API_KEY + '&cnt=5');
    
    return axios.get(encodedURI)
      .then(function (response) {
        console.log(response);
      })
  }
}