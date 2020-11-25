import React, { useState } from 'react';
import './App.css';

//importing Components
import Form from './components/Form.js';
import ToDoList from './components/ToDoList.js';

function App() {
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Chase's ToDo List!</h1>
      </header>
      <Form toDos={toDos} setToDos={setToDos} setInputText={setInputText} inputText={inputText} />
      <ToDoList setToDos={setToDos} toDos={toDos} inputText={inputText}/>
    </div>
  );
}

export default App;
