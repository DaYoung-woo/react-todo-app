import React, { useState, useEffect } from "react";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import TodoBottom from "../components/TodoBottom";
import ThemeProvider from "../components/ThemeProvider";
import { v4 as uuidv4 } from "uuid";

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
          id: 1,
          text: "리액트 강의 듣기",
          isComplete: true,
        },
        {
          id: 2,
          text: "Todo App 만들기",
          isComplete: true,
        },
        {
          id: 3,
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
    setList(list.concat({ id: uuidv4(), text, isComplete: false }));
  };

  const checkTodo = (id) => {
    setList(
      list.map((el) => {
        return el.id === id ? { ...el, isComplete: !el.isComplete } : el;
      })
    );
  };

  const deleteTodo = (id) => {
    setList(list.filter((el) => el.id !== id));
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
