var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
  container: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    fontSize: '55px'
  },
  content: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    marginTop: '30px',
  }
}

var Loading = React.createClass({
  // make the loading more style
  propTypes: {
    text: PropTypes.string,
    speed: PropTypes.number,
  },

  //if have it will be ignor
  getDefaultProps: function () {
    return {
      text: 'Loading',
      speed: 300
    }
  },

  getInitialState: function () {
    this.originalText = this.props.text;
    return {
      text: this.originalText
    }
  },

  componentDidMount: function () {
    var stopper = this.originalText + '...'  // Loading ...
    this.interval = setInterval(function () {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + '.'  // Loading blinking
        })
      }
    }.bind(this), this.props.speed)
  },
  
  componentWillUnmount: function () {
    window.clearInterval(this.interval)
  },
  render: function () {
    return (
      <div style={styles.container}>
        <p style={styles.content}>{this.state.text}</p>
      </div>
    )
  }
})

module.exports = Loading
