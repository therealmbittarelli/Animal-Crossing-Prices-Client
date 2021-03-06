import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {

  render() {
    return (
      <header>
        <h1 id='site-header'>Animal Crossing: New Horizons</h1>
        <h2 id='site-subheader'>Seller's Guide</h2>
        <Link
          to='/add'>Add an item</Link>
        <Link
          to='/'>Home</Link>
      </header>
    )
  }
}