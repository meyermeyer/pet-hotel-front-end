import React, {Component} from 'react';
import {connect} from 'react-redux';

class Dashboard extends Component{
	render(){
		return(
			<h2>Here is the dashboard!</h2>
		)
	}
}

const mapStateToProps = state => ({
	state
});

// this allows us to use <App /> in index.js
export default (connect(mapStateToProps)(Dashboard));