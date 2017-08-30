var React = require('react');
var moment = require('moment');

function convertTemp (kelvin) {
  return parseInt(((kelvin - 273.15)* 1.8000 + 32.00), 10)
}

function Detail (props) {
  var day = props.location.state;
  var city = props.location.city;
  var dayDate = moment.unix(day.dt).format('dddd, MMM Do') ;
  var imgSrc = '/app/images/weather-icons/' + day.weather[0].icon + '.svg';

  return (
    <div
      className='day-container'>
      <img 
        className='weather-icon'
        alt='Weather'
        src={imgSrc} />
      <h2 className='day-time'>{dayDate}</h2>
      <div className='description-container'>
        <p>{city}</p>
        <p>{day.weather[0].description}</p>
        <p>Min Temp: {convertTemp(day.temp.min)} degrees</p>
        <p>Max Temp: {convertTemp(day.temp.max)} degrees</p>
        <p>Humidity: {day.humidity}%</p>
      </div>
    </div>
  )
}

module.exports = Detail;