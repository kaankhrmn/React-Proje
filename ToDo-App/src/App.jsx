import { useState } from 'react';
import './App.css';
import ToDoCreate from './component/ToDoCreate';
import ToDoList from './component/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeToDo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <>
      <div className='App'>
        <div className='main'>
          <ToDoCreate onCreateTodo={createTodo} />
          <ToDoList ListToDo={todos} onRemoveToDo={removeToDo} />
        </div>
      </div>
    </>
  );
}

export default App;
