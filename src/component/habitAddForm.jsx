import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
  inputRef = React.createRef();
  formRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    this.formRef.current.reset();
    name && this.props.onAdd(name);
  }

  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input ref={this.inputRef} type="text" className="add-input" placeholder="habit"/>
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;