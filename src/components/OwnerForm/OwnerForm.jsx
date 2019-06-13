import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


class OwnerForm extends Component {

state ={
    name: ''
}

// Capture value in input
nameHandler = (event)=>{
    console.log('Name input', event.target.value);
    this.setState({
        name: event.target.value
    })
}

// Send name information to SAGA
    addNameHandler =(event)=>{
        event.preventDefault()
        console.log('Click Add Name Button');
        console.log(this.state);
        
        this.props.dispatch({type:'ADD_OWNER', payload: this.state})
    }

    render() {
        return (
            <form onSubmit={this.addNameHandler}>
                <TextField type="text" placeholder="name" onChange={this.nameHandler} />  
                <Button type="submit" variant="contained" color="default" >Add </Button>
            </form>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(OwnerForm);