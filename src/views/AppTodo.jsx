import React, { useState } from "react";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import TodoBottom from "../components/TodoBottom";

export default function AppTodo() {
  const [mode, setMode] = useState("All");
  const [list, setList] = useState([]);

  const changeMode = (mode) => {
    setMode(mode);
  };

  const addTodo = (text) => {
    setList((prev) => {
      prev.push({
        text,
        isComplete: false,
      });
    });
  };
  return (
    <div className="App justify-center items-center">
      <div className="rounded-xl shadow-lg card-size">
        {mode}
        <TodoHeader changeMode={changeMode} mode={mode} />
        <TodoList list={list} />
        <TodoBottom addTodo={addTodo} />
      </div>
    </div>
  );
}
