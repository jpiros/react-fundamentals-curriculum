var React = require('react');

var Search = require('./Search');

class Header extends React.Component {
  render() {
    return (
      <header className='header-container'>
        <h1>Hason's Weather App</h1>
        <Search />
      </header>
    )
  }
}

module.exports = Header;