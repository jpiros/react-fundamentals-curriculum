var React = require('react');
var queryString = require('query-string');
var api = require('../utils/api');
var Loading = require('./Loading');
var Day = require('./Day');

function DaysGrid (props) {
  return (
    <div className='days-container'>
      {props.days.map(function(day) {
        return (
          <Day key={day.dt} day={day} city={props.city} />
        )
      })}
    </div>
  )
}

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: queryString.parse(this.props.location.search).city,
      days: null,
      loading: true
    }
  }
  componentDidMount () {
    api.fetchWeatherForecast(this.state.city)
      .then(function (response) {
        this.setState(function () {
          return {
            days: response.list,
            loading: false
          }
        })
      }.bind(this))
  }
  render() {
    return (
      <div className='forecast-container'>
        <h1 className='city'>{this.state.city}</h1>
        {this.state.loading
          ? <Loading />
          : <DaysGrid days={this.state.days} city={this.state.city}/>}
      </div>
    )
  }
}

module.exports = Forecast;