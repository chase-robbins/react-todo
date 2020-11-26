import React, { useState, useEffect } from 'react';
import './App.css';

//importing Components
import Form from './components/Form.js';
import ToDoList from './components/ToDoList.js';

function App() {
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredToDos, setFilteredToDos] = useState([]);

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredToDos(toDos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredToDos(toDos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredToDos(toDos);
        break;
    }
  }

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
     filterHandler();
     saveLocalTodos();
  }, [toDos, status]);

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(toDos));
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let toDoLocal = JSON.parse(localStorage.getItem('todos'));
      setToDos(toDoLocal)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Chase's ToDo List!</h1>
      </header>
      <Form
        toDos={toDos}
        setToDos={setToDos}
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus}
      />
      <ToDoList setToDos={setToDos} toDos={filteredToDos} inputText={inputText}/>
    </div>
  );
}

export default App;
