import React from 'react';

const Todo = ({ todoList, toggleTodo }) => {
    return(
        <div>
            {todoList.map(todo => (
                <div key={todo.id} onClick={() => toggleTodo(todo.id)}>
                    {todo.item}
                </div>
                ))}
        </div>
    );
};

export default Todo;