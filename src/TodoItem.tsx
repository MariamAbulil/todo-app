import React from 'react';
import { TodoItemProps } from './types';

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', marginLeft: '8px' }}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '8px' }}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;