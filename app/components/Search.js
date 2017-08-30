var React = require('react');
var Link = require('react-router-dom').Link;

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    var value = event.target.value;

    this.setState(function () {
      return {
        search: value
      }
    });
  }
  render() {
    return (
      <form className='search-container'>
        <input 
          type="text" 
          autoComplete="off"
          placeholder="Los Angeles, CA"
          value={this.state.search}
          onChange={this.handleChange} />
        <Link
          className="button"
          to={{
            pathname: '/forecast',
            search: '?city=' + this.state.search
          }}>
            Get Weather
          </Link>
      </form>
    )
  }
}

module.exports = Search;