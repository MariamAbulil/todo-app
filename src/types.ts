export interface Todo {
    id: number;
    text: string;
    completed: boolean; 
  }
  export interface TodoItemProps {
    todo: Todo;
    toggleComplete: (id: number) => void;
    deleteTodo: (id: number) => void;
  }  