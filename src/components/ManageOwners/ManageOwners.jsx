import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Button, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import OwnerTable from '../OwnerTable/OwnerTable'

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



class ManageOwners extends Component {

    manageHandler = () => {
        this.props.history.push("/")
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid className={classes.root}>
                <h2>Here is the Owner Dashboard!</h2>
                <button onClick={this.manageHandler}>Pet Dashboard</button>
                <OwnerTable />
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    state
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(ManageOwners));