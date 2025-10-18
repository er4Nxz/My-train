import type React from "react";
import type { TodoType } from "./Todo.types";
import TodoItem from "./TodoItem";
type TodoListProps = {
  todo: TodoType[];
};
const TodoList: React.FC<TodoListProps> = ({ todo }) => {
  return (
    <>
      <ul>
        {todo.map((item) => {
          return <TodoItem key={item.id} {...item} />;
        })}
      </ul>
    </>
  );
};

export default TodoList;
