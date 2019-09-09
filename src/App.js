import React, { useReducer } from 'react';
import './App.css';

import { initialState, reducer } from './reducer/reducer';
import Todo from './components/Todo';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('state', state);
  return (
    <div className="App">
      <Todo todoList={state.todoList}/>
    </div>
  );
}

export default App;
