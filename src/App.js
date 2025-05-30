import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    
  }


  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <input type='text' placeholder='Add a new task' value={input} onChange={(e) => setInput(e.target.value)} />
      <button>Add</button>
      <ul>

      </ul>
    </div>
  );
}

export default App;
