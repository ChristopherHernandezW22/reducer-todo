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

  return (
    <div className="App">
      <Todo todoList={state.todoList}/>
      <Form addTodo={addTodo} />
    </div>
  );
}

export default App;
