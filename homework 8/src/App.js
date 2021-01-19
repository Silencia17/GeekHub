import React, { useState } from 'react'
import TodoList from './components/todo-list'

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const setTodoItem = (item) => {
    setTodoItems([...todoItems, item])
  };

  const removeTodo = (id) => {
    setTodoItems(todoItems.filter(el => el.id !== id))
  };

  return (
      <TodoList
        items={todoItems}
        setTodoItem={setTodoItem}
        removeTodo={removeTodo}
      />
  )
}

export default App;
