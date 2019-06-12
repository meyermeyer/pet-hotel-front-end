import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Dashboard from '../Dashboard/Dashboard';



import './App.css';

class App extends Component {
  componentDidMount () {

  }

  render() {
    return (
      <>
      <h1>Pet Hotel</h1>

      <Dashboard />

      </>
  )}
}

export default connect()(App);
