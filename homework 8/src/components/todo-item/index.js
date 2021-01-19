import React from 'react';
import './styles.scss';

export function TodoItem ({ item, removeTodo }) {
  return (
      <div className="item">
        <p>{item.title}</p>
        <button onClick={() => { removeTodo(item.id) }} className="cross">x</button>
      </div>
  )
}
