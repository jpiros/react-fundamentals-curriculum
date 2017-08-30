var React = require('react');

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    var value = event.target.value;

    this.setState(function () {
      return {
        search: value
      }
    });
  }
  handleSubmit(event) {
    event.preventDefault();

  }
  render() {
    return (
      <form className='search-container' onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          autoComplete="off"
          placeholder="Los Angeles, CA"
          value={this.state.search}
          onChange={this.handleChange} />
        <button type="submit">Get Weather</button>
      </form>
    )
  }
}

module.exports = Search;