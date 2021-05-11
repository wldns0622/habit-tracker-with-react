import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import InputForm from './components/addForm';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  }

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    if (habits[index].count > 0) {
      habits[index].count--;
      this.setState({ habits });
    }
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits })
  };

  handleAddHabit = (habitText) => {
    const habits = [...this.state.habits];
    let newHabbit = {
      id: this.state.habits.length + 1,
      name: habitText,
      count: 0
    };
    habits.push(newHabbit);

    this.setState({ habits });
  }

  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <InputForm onAddHabit={this.handleAddHabit} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
        <button>Reset All</button>
      </>
    )
  }
}

export default App;