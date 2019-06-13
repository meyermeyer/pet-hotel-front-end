import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, TextField, Select, MenuItem} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    root: {
        margin: '40px',

    },
    inputs: {
        margin: '15px',
        
    }

};


class PetForm extends Component {

    state = {
        name: '',
        color: '',
        breed: '',
        date_in: '', 
    }

    // Capture value in input
    nameHandler = (event) => {
        console.log('Name input', event.target.value);
        this.setState({
            name: event.target.value
        })
    }

    // Send name information to SAGA
    addNameHandler = (event) => {
        event.preventDefault()
        console.log('Click Add Name Button');
        console.log(this.state);

        this.props.dispatch({type: 'ADD_PET', payload: this.state})
    }

    render() {
        const { classes } = this.props;

        return (
            <div >
            <h3>Add Pet</h3>
            <form onSubmit={this.addNameHandler} >
                <TextField type="text" placeholder="Pet Name"/>
                <TextField type="text" placeholder="Color"/>
                <TextField type="text" placeholder="Breed" />
                <Select>
                    {this.props.owners && this.props.owners.map(owner => (
                        <MenuItem key={owner.id}>{owner.name}</MenuItem>
                        
                    ))}
                    </Select>
                
              <Button type="submit" variant="contained" color="default" >Submit </Button>
                   
            </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    pet: state.pet,
    owners: state.owner
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(PetForm));