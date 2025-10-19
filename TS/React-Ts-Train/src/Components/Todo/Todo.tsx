import type React from "react";
import TodoList from "./TodoList";
import type { TodoType } from "./Todo.types";

const Todo: React.FC = (): React.ReactNode => {
  const Todo: TodoType[] = [
    { id: 1, title: "learn ts + react", isDone: true,color:"red" },
    { id: 2, title: "learn next js + react", isDone: false, color:"green"},
  ];
  return (
    <>
      <TodoList todo={Todo} />
    </>
  );
};

export default Todo;
