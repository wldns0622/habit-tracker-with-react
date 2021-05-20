import React, { Component } from 'react';
import '../app.css';

class Habit extends Component {
  state = {
    count: 0,
  }

  handleIncrease = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  handleDecrease = () => {
    let count = this.state.count - 1;
    this.setState({
      count: count < 0 ? 0 : count,
    })
  }

  render() {
    return (
      <li className="habit" >
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrease}><i className="fas fa-plus-square"></i></button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrease}><i className="fas fa-minus-square"></i></button>
        <button className="habit-button habit-delete"><i className="fas fa-trash"></i></button>
      </li>
    )
  }
}

export default Habit;