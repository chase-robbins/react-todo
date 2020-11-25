import React from 'react';
//import Components
import ToDo from './ToDo';

const ToDoList = ({ toDos, setToDos }) => {
  //Events
  const deleteHandler = () => {

  };
  return(
    <div className="todo-container">
      <ul className="todo-list">
        {
          toDos.map(todo => (
            <ToDo setToDos={setToDos} toDos={toDos} key={todo.id} text={todo.text}/>
          ))
        }
      </ul>
    </div>
  );
};

export default ToDoList;
