var React = require('react');
var moment = require('moment');

function Day (props) {
  var dayDate = moment.unix(props.day.dt).format('dddd, MMM Do') ;
  var imgSrc = 'app/images/weather-icons/' + props.day.weather[0].icon + '.svg';

  return (
    <div className='day-container'>
      <img 
        className='weather-icon'
        alt='Weather'
        src={imgSrc} />
      <h2 className='day-time'>{dayDate}</h2>
    </div>
  )
}

module.exports = Day;