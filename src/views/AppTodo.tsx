import { useState, useEffect } from "react";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import TodoBottom from "../components/TodoBottom";
import ThemeProvider from "../components/ThemeProvider";

interface todoItemType {
  text: string;
  isComplete: boolean;
}

export default function AppTodo() {
  const [mode, setMode] = useState("All");
  const changeMode = (mode: string): void => {
    setMode(mode);
  };

  const [list, setList] = useState(() => {
    const localTodoList: string | null = localStorage.getItem("myTodoList");
    if (localTodoList !== null) {
      const myTodoList: todoItemType[] = JSON.parse(localTodoList);
      return myTodoList;
    } else {
      const TodoList: todoItemType[] = [
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

  const addTodo = (text: string): void => {
    setList(list.concat({ text, isComplete: false }));
  };

  const checkTodo = (text: string): void => {
    setList(
      list.map((el: todoItemType) => {
        return el.text === text ? { ...el, isComplete: !el.isComplete } : el;
      })
    );
  };

  const deleteTodo = (text: string): void => {
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
