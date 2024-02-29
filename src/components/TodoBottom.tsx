import React, { useState, useContext } from "react";
import ThemeContext from "./ThemeContext";
const TodoBottom: React.FC<TodoBottomProps> = ({ addTodo }) => {
  const { theme } = useContext(ThemeContext);
  const [text, setText] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className={`card-header rounded-b-xl flex items-center px-4 ${theme}`}>
      <input
        type="text"
        className="h-9 w-72 rounded-l-lg pl-3"
        placeholder="AddTodo"
        onChange={onChange}
        value={text}
      />
      <button className={`add-btn h-9 w-24 rounded-r-lg ${theme}`} onClick={() => addTodo(text)}>
        add
      </button>
    </div>
  );
};

export default TodoBottom;
