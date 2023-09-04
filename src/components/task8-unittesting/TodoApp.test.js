import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; 
import { addTodo, deleteTodo } from '../task7-Redux/action';
import TodoApp from '../task7-Redux/TodoApp';
// Mock the Redux store
const mockStore = configureStore([]);
const initialState = {
  todos: [],
};

let store;

beforeEach(() => {
  store = mockStore(initialState);
});

test('renders the TodoApp component', () => {
  const { getByText, getByPlaceholderText } = render(
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );

  // Check if the component's title is rendered
  const titleElement = getByText('Todo List');
  expect(titleElement).toBeInTheDocument();

  // Check if the input and Add button are rendered
  const inputElement = getByPlaceholderText('Add a new todo');
  expect(inputElement).toBeInTheDocument();

  const addButton = getByText('Add');
  expect(addButton).toBeInTheDocument();
});

test('adds a new todo', () => {
  const { getByPlaceholderText, getByText } = render(
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );

  // Find the input element and the Add button
  const inputElement = getByPlaceholderText('Add a new todo');
  const addButton = getByText('Add');

  // Simulate user input and click the Add button
  fireEvent.change(inputElement, { target: { value: 'Test Todo' } });
  fireEvent.click(addButton);

  // Check if the todo is added to the list
  const addedTodo = getByText('Test Todo');
  expect(addedTodo).toBeInTheDocument();
});

test('deletes a todo', () => {
  // Create an initial state with a todo
  const initialStateWithTodo = {
    todos: [{ id: 1, text: 'Test Todo' }],
  };

  // Use the mock store with the initial state
  store = mockStore(initialStateWithTodo);

  const { getByText } = render(
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );

  // Check if the todo is initially present
  const todoElement = getByText('Test Todo');
  expect(todoElement).toBeInTheDocument();

  // Find and click the Delete button
  const deleteButton = getByText('Delete');
  fireEvent.click(deleteButton);

  // Check if the todo is removed from the list
  expect(todoElement).not.toBeInTheDocument();
});
