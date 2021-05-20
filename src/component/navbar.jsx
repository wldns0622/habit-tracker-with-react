import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <i className="navbar__logo fas fa-leaf"></i>
        <span className="navbar__title">Habit Tracker</span>
        <span className="navbar__count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;