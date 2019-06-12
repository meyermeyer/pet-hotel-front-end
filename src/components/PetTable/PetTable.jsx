import React, {Component} from 'react';
import {connect} from 'react-redux';

class PetTable extends Component{
	render(){
		return(
			<>
			<p>PET TABLE</p>
			</>
		)
	}
}

const mapStateToProps = state => ({
	state
});

// this allows us to use <App /> in index.js
export default (connect(mapStateToProps)(PetTable));