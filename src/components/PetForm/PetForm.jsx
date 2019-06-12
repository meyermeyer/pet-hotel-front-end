import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';

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

        this.props.dispatch({ type: 'ADD_OWNER', payload: this.state })
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
                    <option>Owner</option>
                </Select>
                <Button type="submit" variant="contained" color="default" >Submit </Button>
            </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    pet: state.pet
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(PetForm));