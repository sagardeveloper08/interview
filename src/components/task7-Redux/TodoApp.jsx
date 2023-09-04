import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from './action';

const TodoApp = () => {
  const [newTodoText, setNewTodoText] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      dispatch(addTodo(newTodoText));
      setNewTodoText('');
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="container text-center mt-5">
      <h1>Todo List</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleAddTodo}
          >
            Add
          </button>
        </div>
      </div>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            {todo.text}
            <button
              className="btn btn-danger float-right"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
