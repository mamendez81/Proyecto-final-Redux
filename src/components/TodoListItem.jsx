import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({todo, onRemovePressed, onMarkPressed}) => (
    <div className={`todo-item-${!todo.isComplete? 'container': 'completed'}`}>
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        <button 
          className={`completed-${!todo.isComplete? 'button': 'completed'}`} 
          onClick={()=>onMarkPressed(todo.text)}
          >{!todo.isComplete? 'Mark as completed!': 'Completed'} </button>
        <button 
          className="remove-button" 
          onClick={()=>onRemovePressed(todo.text)}
          >Remove</button>
      </div>
    </div>
      
      
  );
  export default TodoListItem;
