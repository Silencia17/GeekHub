import React from 'react';
import { TodoItem } from '../todo-item';
import { AddTodo } from '../add-todo';
import './styles.scss';

export default function TodoList ({ items = [], setTodoItem, removeTodo }) {
  return (
      <div className="todo-list-wrapper">
        <div className="add-todo">
          <AddTodo setTodoItem={setTodoItem} />
        </div>
        <div className="todo-list">
          {items.map((item, i) => {
            item.id = i;
            return (
              <TodoItem removeTodo={removeTodo} key={i} item={item} />
            )
          })}
        </div>
      </div>
  )
}
