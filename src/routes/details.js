import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import './index.css';


class Details extends Component {
  // This is where we will show a sortable table with all details from all columns
  // NOTE: this is inherently not mobile-friendly.  Will likely use media queries to
  // hide/show elements based on width with a disclaimer.
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Details;
