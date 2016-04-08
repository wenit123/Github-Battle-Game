var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function() {
		return{
			isLoading : true,
			playersInfo:[],
		}
	},

	componentDidMount: function () {
		var query = this.props.location.query;
    // Fetch info from github then update state
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
        .then(function (players) {
        this.setState({
          isLoading: true,
          playersInfo: [players[0], players[1]]
        })
      }.bind(this)) ////////
	},

	handleInitiateBattle: function () {
		// ush to the result
		this.context.router.push({
			pathname: '/results',
			state: {
				playersInfo: this.state.playersInfo // allow to push info through the result route
			}
		})
	},

	render: function(){
		return(
			<ConfirmBattle 
			isLoading={this.state.isLoading}
			onInitiateBattle={this.handleInitiateBattle}
			playersInfo={this.state.playersInfo}
			/>
		)
	}
});

module.exports = ConfirmBattleContainer;