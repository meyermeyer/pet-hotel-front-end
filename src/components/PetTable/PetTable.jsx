import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Paper, Table, TableBody, TableCell, TableHead, TableRow, Button, Grid} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import PetForm from '../PetForm/PetForm'

const styles = {
	root: {
		margin: '40px',
		
	},
	paper: {
		padding: '15px',
		marginRight: '40px',
		marginTop: '20px',
		width: '80%',
	},
	table: {
		margin: '15px',
	}

};

class PetTable extends Component{

	componentDidMount(){
		this.props.dispatch({type: 'FETCH_PET'})
	};//end componentDidMount

	render(){
		const {classes} = this.props;
		let editButton;
		return(
			<Grid className={classes.root}>
				<PetForm/>
			<p>PET TABLE</p>
			<Paper className={classes.paper}>
		      <Table className={classes.table}>
		        <TableHead>
		          <TableRow>
		            <TableCell>Owner</TableCell>
		            <TableCell align="right">Pet</TableCell>
		            <TableCell align="right">Breed</TableCell>
		            <TableCell align="right">Color</TableCell>
		            <TableCell align="right">Checked In?</TableCell>
					<TableCell align="right">Actions</TableCell>
		          </TableRow>
		        </TableHead>
		        <TableBody>
		            <TableRow>
					  <TableCell align="right">PET OWNER</TableCell>
		              <TableCell align="right">PET NAME</TableCell>
		              <TableCell align="right">PET BREED</TableCell>
		              <TableCell align="right">PET COLOR</TableCell>
		              <TableCell align="right">PET CHECKED IN</TableCell>
					  <TableCell align="right"><Button variant="contained" color="primary">EDIT</Button><Button variant="contained" color="secondary">DELETE</Button></TableCell>
		            </TableRow>
					{this.props.pet && this.props.pet.map((pet) => {
						if(this.props.pet.checked_in){
							editButton = <Button variant="contained" color="primary">Check out</Button>
						}else if(!this.props.pet.checked_in){
							editButton = <Button variant="contained" color="primary">Check in</Button>
						}
						return(
							<TableRow key={pet.id}>
								<TableCell>{pet.owner_id}</TableCell>
								<TableCell>{pet.name}</TableCell>
								<TableCell>{pet.breed}</TableCell>
								<TableCell>{pet.color}</TableCell>
								<TableCell>{pet.checked_in}</TableCell>
								<TableCell>{editButton} <Button variant="contained" color="secondary">Delete</Button></TableCell>
							</TableRow>
						)
					})}
		        </TableBody>
		      </Table>
    		</Paper>
			</Grid>
		)
	}
}

const mapStateToProps = state => ({
	pet: state.pet
});

export default withStyles(styles)(connect(mapStateToProps)(PetTable));