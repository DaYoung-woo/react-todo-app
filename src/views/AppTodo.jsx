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

  const [list, setList] = useState(() => {
    if (localStorage.getItem("myTodoList"))
      return JSON.parse(localStorage.getItem("myTodoList"));
    else {
      const TodoList = [
        {
          text: "리액트 강의 듣기",
          isComplete: true,
        },
        {
          text: "Todo App 만들기",
          isComplete: true,
        },
        {
          text: "Youtube App 만들기",
          isComplete: false,
        },
      ];
      localStorage.setItem("myTodoList", JSON.stringify(TodoList));
      return TodoList;
    }
  });

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
