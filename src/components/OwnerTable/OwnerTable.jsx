import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Button, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import OwnerForm from '../OwnerForm/OwnerForm'

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

class OwnerTable extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_OWNER' })
    };//end componentDidMount

    render() {
        const { classes } = this.props;
        return (
          
            <Grid className={classes.root}>
                <OwnerForm />
                <p>OWNER TABLE</p>
                <Paper className={classes.paper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Owner</TableCell>
                                <TableCell align="right">Number of Pets</TableCell>
                                <TableCell align="right">Actions </TableCell>
                                
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell >NAME </TableCell>
                                <TableCell align="right">NUMBER OF PETS</TableCell>
                                <TableCell align="right">ACTIONS</TableCell>
                                <Button variant="contained" color="secondary">Delete</Button>
                            </TableRow>
                            {/* {this.props.owner && this.props.owner.map((owner) => {
                                return (
                                    <TableRow key={owner.id}>
                                        <TableCell>{owner.name}</TableCell>
                                        <TableCell>{owner.pet_number}</TableCell>
                                        <TableCell><Button variant="contained" color="secondary">Delete</Button></TableCell>
                                    </TableRow>
                                )
                            })} */}
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    owner: state.owner
});

export default withStyles(styles)(connect(mapStateToProps)(OwnerTable));