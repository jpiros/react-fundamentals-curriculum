var React = require('react');

class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Enter a City and State</h1>
        <div className='search-container'>
          <input type="text" placeholder="Los Angeles, CA" />
          <button type="submit">Get Weather</button>
        </div>
      </div>
    )
  }
}

module.exports = Home;