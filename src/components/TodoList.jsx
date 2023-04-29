import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ list, checkTodo, deleteTodo }) {
  return (
    <div className="list-body">
      <ul className="px-4 py-4">
        {list.map((todo) => (
          <TodoItem
            isComplete={todo.isComplete}
            text={todo.text}
            key={todo.text}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}
