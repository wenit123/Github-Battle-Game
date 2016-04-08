var React = requrie('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var UserDetailsWrapper = require('./UserDetailsWrapper');
var UserDetails = require('./UserDetails');

// show the detail
function puke (obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <p>LOADING</p>
    : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
        ///Player 1 Info
          <UserDetailsWrapper header='Player 1'>
            <UserDetails info={props.playersInfo[0]} />
          </UserDetailsWrapper>
        /// Player 2 Info 
          <UserDetailsWrapper header='Player 2'>
            <UserDetails info={props.playersInfo[1]} />
          </UserDetailsWrapper>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={styles.space}>
          /// onclick button to the result
            <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate Battle!</button>
          </div>
          <div className='col-sm-12' style={styles.space}>
            <Link to='/playerOne'>
              <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
            </Link>
          </div>
        </div>
      </div>
}

ConfirmBattle.propTypes = {
	isLoading: propTypes.bool.isRequired,
	onInitiateBattle: PropTypes.func.isRequired,
	playerinfo: propTypes.array.isRequired,
}
module.exports = ConfirmBattle;