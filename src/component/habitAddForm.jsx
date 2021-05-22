import React, {memo} from 'react';

const HabitAddForm = memo((props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    formRef.current.reset();
    name && props.onAdd(name);
  }

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input ref={inputRef} type="text" className="add-input" placeholder="habit"/>
      <button className="add-button">Add</button>
    </form>
  );
}); 

export default HabitAddForm;