import React from 'react';

const Todo = ({ todoList }) => {
    return(
        <div>
            {todoList.map(todo => <div key={todo.id}> {todo.item}</div>)}
        </div>
    );
};

export default Todo;