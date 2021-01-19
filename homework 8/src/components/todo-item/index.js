import React from 'react';
import './styles.scss';

export function TodoItem ({ item, removeTodo }) {
  console.log(item);
  return (
      <div className="item">
        <p>{item.title}</p>
        <button onClick={() => { removeTodo(item.id) }} className="cross">x</button>
      </div>
  )
}
