var React = require('react');
var transparentBg = require('../styles').transparentBg;
var Link = ReactRouter.Link
var ReactRouter = require('react-router');

/*
var Home = React.createClass({
  render: function () {
    return (
      <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
      <h1>Github Battle</h1>
      <p className='lead'>What even is a jQuery?</p>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-success'>Get Started</button>
      </Link>
    </div>
    )
  }
});
*/

function Home () {
  return (
    <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
      <h1>Github Battle</h1>
      <p className='lead'>What even is a jQuery?</p>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-success'>Get Started</button>
      </Link>
    </div>
  )
}
module.exports = Home;