var React = require('react');
var queryString = require('query-string');
var api = require('../utils/api');
var Loading = require('./Loading');

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: queryString.parse(this.props.location.search).city,
      list: null,
      loading: true
    }
  }
  componentDidMount () {
    api.fetchWeatherForecast(this.state.city)
      .then(function (response) {
        console.log(response);
      })
  }
  render() {
    return (
      <div className='forecast-container'>
        <h1 className='city'>{this.state.city}</h1>
        {this.state.loading
          ? <Loading />
          : <div>Forecast Here</div>}
      </div>
    )
  }
}

module.exports = Forecast;