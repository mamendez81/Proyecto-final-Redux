import React from 'react';
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { connect } from 'react-redux';
import './TodoList.css';
import { markTodo, removeTodo } from '../storage/actions';


const TodoList = ({todos=[], onRemovePressed, onMarkPressed}) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo,index) => (
      <TodoListItem 
        key={index} 
        todo={todo} 
        onMarkPressed={onMarkPressed}
        onRemovePressed={onRemovePressed}/>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: text => dispatch(removeTodo(text)),
  onMarkPressed: text => dispatch(markTodo(text)),
});
export default connect(mapStateToProps, mapDispatchToProps) (TodoList);