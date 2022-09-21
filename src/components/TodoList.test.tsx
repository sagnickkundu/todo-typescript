import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import TodoList from './TodoList';

test('creates a new todo', () => {
    const todos = [{id: "t1", text: "Get Groceries"}];
    const todoDeleteHandler = () => {
    }
  render(<TodoList items={todos} onDeleteTodo={todoDeleteHandler}  />);
  const todoCountElement = screen.getByTestId("todoCount");
  const todoTextElement = screen.getByTestId("todoText");
  expect(todoTextElement).toHaveTextContent("Get Groceries");
  expect(todoCountElement).toHaveTextContent("1 tasks left to do");
});

