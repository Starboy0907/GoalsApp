import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };
  
  const handleSubmit = e => {   //processes submition
    e.preventDefault();  //validates for not blank
  
    
    let x = document.forms["form"]["text"].value;
    if (x === "") {
      alert("Goal must be filled out");
      return false
    }

  
  props.onSubmit({            //attaches properties to the input, id and value
    id: Math.floor(Math.random() * 10000),  //generate random value
    text: input
  });
  setInput('');
};


  return (
    <form onSubmit={handleSubmit} className='todo-form' name="form">
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <> 
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
