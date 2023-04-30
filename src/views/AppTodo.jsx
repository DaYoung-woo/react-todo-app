import React, { useState, useEffect } from "react";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import TodoBottom from "../components/TodoBottom";
import ThemeProvider from "../components/ThemeProvider";

export default function AppTodo() {
  const [mode, setMode] = useState("All");
  const changeMode = (mode) => {
    setMode(mode);
  };

  const [list, setList] = useState(
    localStorage.getItem("myTodoList")
      ? JSON.parse(localStorage.getItem("myTodoList"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("myTodoList", JSON.stringify(list));
  }, [list]);

  const addTodo = (text) => {
    setList(list.concat({ text, isComplete: false }));
  };

  const checkTodo = (text) => {
    setList(
      list.map((el) => {
        return el.text === text ? { ...el, isComplete: !el.isComplete } : el;
      })
    );
  };

  const deleteTodo = (text) => {
    setList(list.filter((el) => el.text !== text));
  };

  return (
    <ThemeProvider>
      <TodoHeader changeMode={changeMode} mode={mode} />
      <TodoList
        mode={mode}
        list={list}
        checkTodo={checkTodo}
        deleteTodo={deleteTodo}
      />
      <TodoBottom addTodo={addTodo} />
    </ThemeProvider>
  );
}
