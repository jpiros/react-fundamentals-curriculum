var React = require('react');

var Search = require('./Search');

class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Enter a City and State</h1>
        <Search />
      </div>
    )
  }
}

module.exports = Home;