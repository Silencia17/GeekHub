import React, { useState, useEffect } from 'react';
import './styles.scss'

export function AddTodo ({ setTodoItem }) {
  const [value, setValue] = useState('');

  const addTodo = () => {
    if (!value) {
      return
    }
    setTodoItem({
      title: value
    });
    setValue('');
  };

  useEffect(() => {
    const listener = event => {
      console.log(event)
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        addTodo()
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [addTodo]);

  return (
      <>
        <input
            type="text"
            className="input"
            value={value}
            onChange={({ target }) => {
              setValue(target.value)
            }}
        />
        <button className="add-todo-button" onClick={addTodo}>
          Add todo item
        </button>
      </>
  )
}
