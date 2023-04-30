import React from "react";
import TodoItem from "./TodoItem";
import { useTheme } from "../context/ThemeContext";

function filterTodoList(list, mode) {
  return mode === "All"
    ? list
    : list.filter(
        (el) =>
          (mode === "Completed" && el.isComplete) ||
          (mode === "Active" && !el.isComplete)
      );
}

export default function TodoList({ list, checkTodo, deleteTodo, mode }) {
  const { theme } = useTheme();
  return (
    <div className={`list-body ${theme}`}>
      <ul className="px-4 py-4">
        {filterTodoList(list, mode).map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}
