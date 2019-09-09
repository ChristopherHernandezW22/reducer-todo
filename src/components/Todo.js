import React from 'react';

const Todo = ({ todoList, toggleTodo }) => {
    return(
        <div>
            {todoList.map(todo => (
                <div key={todo.id} onClick={() => toggleTodo(todo.id)}
                    className={todo.completed ? "completed" : ""}>
                    {todo.item}
                </div>
                ))}
        </div>
    );
};

export default Todo;