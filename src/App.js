import React, { useReducer } from 'react';
import './App.css';

import { initialState, reducer } from './reducer/reducer';
import Todo from './components/Todo';
import Form from './components/Form';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('state', state);

  const addTodo = item => {
    dispatch({ type: "ADD_TODO", payload: item});
  };

  const toggleTodo = id => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div className="App">
      <Todo todoList={state.todoList} toggleTodo={toggleTodo} />
      <Form addTodo={addTodo} clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;
