import React, { Component } from 'react';
import './header.css';
import logo from '../assets/images/logo.png';


class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-highlight"></div>
        <div className="header body-container">
          <img className="brand-logo" src={logo} alt="brand logo"/>
          {
            // Header menu will go here.
          }
        </div>
      </div>
    );
  }
}

export default Header;
