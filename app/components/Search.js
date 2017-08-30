var React = require('react');

class Search extends React.Component {
  render() {
    return (
      <div className='search-container'>
        <input type="text" placeholder="Los Angeles, CA" />
        <button type="submit">Get Weather</button>
      </div>
    )
  }
}

module.exports = Search;