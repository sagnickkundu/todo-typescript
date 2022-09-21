import React from "react";
import "./TodoList.css";
interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((todo) => (
          <li key={todo.id}>
            <span data-testid="todoText">{todo.text}</span>
            <button onClick={props.onDeleteTodo.bind(null, todo.id)} data-testid="deleteButton">
              DELETE
            </button>
          </li>
        ))}
      </ul>
      <p data-testid="todoCount">{props.items.length} tasks left to do</p>
    </div>
  );
};

export default TodoList;
