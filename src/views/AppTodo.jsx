import React, { useState, useEffect } from "react";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import TodoBottom from "../components/TodoBottom";

export default function AppTodo() {
  const [mode, setMode] = useState("All");
  const [list, setList] = useState(
    localStorage.getItem("myTodoList")
      ? JSON.parse(localStorage.getItem("myTodoList"))
      : []
  );

  useEffect(() => {
    console.log(list);
    localStorage.setItem("myTodoList", JSON.stringify(list));
  }, [list]);

  const changeMode = (mode) => {
    setMode(mode);
  };

  const addTodo = (text) => {
    setList(list.concat({ text, isComplete: false }));
  };
  return (
    <div className="App justify-center items-center">
      <div className="rounded-xl shadow-lg card-size">
        <TodoHeader changeMode={changeMode} mode={mode} />
        <TodoList list={list} />
        <TodoBottom addTodo={addTodo} />
      </div>
    </div>
  );
}
