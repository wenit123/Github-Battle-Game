var React = requrie('react');

function ConfirmBattle (prop){
	return props.isLoading === true
    ? <p>LOADING</p>
    : <p>CONFIRM BATTLE</p>
}

module.exports = ConfirmBattle;