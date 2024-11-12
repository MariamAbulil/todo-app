import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { Todo } from './types';

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoText, setNewTodoText] = useState<string>('');

  const addTodo = () => {
    if (newTodoText.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: newTodoText,
        completed: false, 
      };
      setTodos([...todos, newTodo]);
      setNewTodoText('');
    }
  };

  const toggleComplete = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo 
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>ToDo App</h1>
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add</button>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;