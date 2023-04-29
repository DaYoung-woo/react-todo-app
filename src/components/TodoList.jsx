import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ list, checkTodo, deleteTodo, mode }) {
  return (
    <div className="list-body">
      <ul className="px-4 py-4">
        {list.map((todo) =>
          mode === "All" ||
          (mode === "Active" && todo.isComplete) ||
          (mode === "Completed" && !todo.isComplete) ? (
            <TodoItem
              isComplete={todo.isComplete}
              text={todo.text}
              key={todo.text}
              checkTodo={checkTodo}
              deleteTodo={deleteTodo}
            />
          ) : (
            <></>
          )
        )}
      </ul>
    </div>
  );
}
