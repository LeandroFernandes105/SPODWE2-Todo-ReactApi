// App.js (modificado)
import { useState } from 'react';
import './App.css';
import { TodoList } from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn JS', completed: true },
  ]);

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="container">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;