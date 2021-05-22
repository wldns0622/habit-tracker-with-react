import React, { Component } from 'react';
import './app.css';
import Habits from './component/habits';
import Navbar from './component/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 0, name: 'Reading', count: 0 },
      { id: 1, name: 'Running', count: 0 },
      { id: 2, name: 'Coding', count: 0 },
    ]
  }

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  }

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    let count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  }

  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  }

  handleAdd = (name) => {
    const newHabit = { id: Date.now(), name, count: 0}
    this.setState({ habits: [...this.state.habits, newHabit]});
  }

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      habit.count = 0;
      return habit;
    });
    this.setState({ habits });
  }

  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count !== 0).length} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    )
  }

}

export default App;