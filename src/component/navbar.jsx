import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    console.log("nav");
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