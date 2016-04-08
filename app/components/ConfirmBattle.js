var React = requrie('react');

// show th e detail
function puke (obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <p>LOADING</p>
    : <div>CONFIRM BATTLE: {puke(props)}</div>
}

module.exports = ConfirmBattle;