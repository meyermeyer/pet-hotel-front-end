import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Paper, Table, TableBody, TableCell, TableHead, TableRow, Button, Grid} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import PetTable from '../PetTable/PetTable';

const styles = {
	root: {
		margin: '40px',
		
	},
	paper: {
		padding: '15px',
		marginRight: '40px',
		marginTop: '20px',
	},

};




class Dashboard extends Component{

	 manageHandler = () => {
		this.props.history.push("/manage")
	}

	render(){
		const {classes} = this.props;
		return(
			<Grid className={classes.root}>
				<h2>Here is the Pet Dashboard!</h2>
				<button onClick={this.manageHandler}> Manage Owners </button>
				<PetTable />
			</Grid>
		)
	}
}

const mapStateToProps = state => ({
	state
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(Dashboard));