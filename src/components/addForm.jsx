import React, { Component } from 'react';

class InputForm extends Component {

  status = {
    inputText: '',
  }

  handleChange = (event) => {
    let text = event.target.value;
    this.setState({
      inputText: text,
    })
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Habit" onChange={this.handleChange} />
        <button onClick={() => { this.props.onAddHabit(this.state.inputText) }}>Add</button>
      </div>
    );
  }
}

export default InputForm;