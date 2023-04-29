import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ list }) {
  return (
    <div className="list-body">
      <ul className="px-4 py-4">
        {list.map((todo) => (
          <TodoItem text={todo.text} key={todo.text} />
        ))}
      </ul>
    </div>
  );
}
