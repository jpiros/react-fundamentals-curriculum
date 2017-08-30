var React = require('react');

var Header = require('./Header');
var Home = require('./Home');


class App extends React.Component {
  render() {
    return (
      <div id='container'>
        <Header />
        <Home />
      </div>
    )
  }
}

module.exports = App;