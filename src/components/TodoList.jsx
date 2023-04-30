import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import ThemeContext from "./ThemeContext";
export default function TodoList({ list, checkTodo, deleteTodo, mode }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`list-body ${theme}`}>
      <ul className="px-4 py-4">
        {list.map((todo) =>
          mode === "All" ||
          (mode === "Active" && !todo.isComplete) ||
          (mode === "Completed" && todo.isComplete) ? (
            <TodoItem
              todo={todo}
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
