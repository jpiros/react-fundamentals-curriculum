var React = require('react');
var moment = require('moment');
var Link = require('react-router-dom').Link;

function Day (props) {
  var dayDate = moment.unix(props.day.dt).format('dddd, MMM Do') ;
  var imgSrc = 'app/images/weather-icons/' + props.day.weather[0].icon + '.svg';

  return (
    <Link 
      className='day-container'
      to={{
        pathname: '/detail/' + props.city,
        state: props.day,
        city: props.city
      }}>
      <img 
        className='weather-icon'
        alt='Weather'
        src={imgSrc} />
      <h2 className='day-time'>{dayDate}</h2>
    </Link>
  )
}

module.exports = Day;