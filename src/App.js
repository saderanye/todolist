import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === '') return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput('');
  }

  const toggleComplete =(index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }

  const deleteTask =(index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }


  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <input type='text' placeholder='Add a new task' value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.text}
            <button onClick={() => toggleComplete(index)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
