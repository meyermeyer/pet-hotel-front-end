import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Dashboard from '../Dashboard/Dashboard';
import ManageOwners from '../ManageOwners/ManageOwners'



import './App.css';

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <>
        <Router>
          <h1>Pet Hotel</h1>

          <Route
            exact
            path="/"
            component={Dashboard} />
          <Route
            exact
            path="/manage"
            component={ManageOwners} />
        </Router>
      </>
    )
  }
}

export default connect()(App);
