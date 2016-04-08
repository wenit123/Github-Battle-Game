var React = require('react');
//var transparentBg = require('../styles').transparentBg;
// seperate UI to different file, to seperate the logic
var Prompt = require('../components/Prompt');


var PromptContainer = React.createClass({
  // dis routing, proptype ????
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      username: ''
    }
  },
  handleSubmitUser: function (e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });
    // go battle 
    if (this.props.routeParams.playerOne) {
      var pathname =
      this.context.router.push({
        // push object
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username,
        }
      })
    // go player 2
    } else {
      //push to the path 
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },
  handleUpdateUser: function (event) {
    this.setState({
      username: event.target.value
    });
  },
  render: function () {
    return (
      //the stuff that you want to pass
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username} />
    )
  }
});

module.exports = PromptContainer;