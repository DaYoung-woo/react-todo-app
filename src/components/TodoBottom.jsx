import React, { useState } from "react";

export default function TodoBottom({ addTodo }) {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="card-header rounded-b-xl flex items-center px-4">
      <input
        type="text"
        className="h-9 w-72 rounded-l-lg pl-3"
        placeholder="AddTodo"
        onChange={onChange}
        value={text}
      />
      <button
        className="bg-cyan-600 text-white h-9 w-24 rounded-r-lg hover:bg-cyan-500"
        onClick={() => addTodo(text)}
      >
        add
      </button>
    </div>
  );
}
