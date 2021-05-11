import React, { Component } from 'react';
import Habit from './habit';
import InputForm from './addForm';


class Habits extends Component {
  render() {
    return (
      <>
        <InputForm onAdd={this.props.onAdd} />
        <ul className="habits">
          {
            this.props.habits.map(habit => (
              <Habit
                key={habit.id}
                habit={habit}
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}
                onDelete={this.props.onDelete}
              />
            ))
          }
        </ul>
      </>
    );
  }
}

export default Habits;