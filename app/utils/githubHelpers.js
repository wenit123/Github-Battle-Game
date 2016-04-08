var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo (username) {
  // returen as promises
  return axios.get('https://api.github.com/users/' + username + param);
}

function getRepos(username) {
 // fetch username repos
 return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100');
}
function getTotalStars (repos) {
  // calculate the final star for the user
  return repos.data.reduce(function (prev, current) {
    return prev + current.stargazers_count
  }, 0)
} 

function getPlayersData (player) {
  // get reoos
  // get total score
  // returm object with that data
   return getRepos(player.login)
    .then(getTotalStars)
    .then(function (totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
  })
}

function calculateScores (players) {
  // return array, determine the winer
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

var helpers = {
  getPlayersInfo: function (players) {
    //map to players array, axios.all take in an arry in promises
    return axios.all(players.map(function (username) {
      return getUserInfo(username)
    }))
    .then(function (info) {
      return info.map(function (user) {
        return user.data
      })
    })
    .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})
  },
  battle: function(){
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);
    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})
  }
};

module.exports = helpers;