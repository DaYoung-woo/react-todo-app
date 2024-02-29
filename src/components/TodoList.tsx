import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import ThemeContext from "./ThemeContext";

const TodoList: React.FC<TodoListProps> = ({ list, checkTodo, deleteTodo, mode }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`list-body ${theme}`}>
      <ul className="px-4 py-4">
        {list.map(todo =>
          mode === "All" ||
          (mode === "Active" && !todo.isComplete) ||
          (mode === "Completed" && todo.isComplete) ? (
            <TodoItem
              isComplete={todo.isComplete}
              text={todo.text}
              key={todo.text}
              checkTodo={checkTodo}
              deleteTodo={deleteTodo}
            />
          ) : (
            <></>
          ),
        )}
      </ul>
    </div>
  );
};

export default TodoList;
