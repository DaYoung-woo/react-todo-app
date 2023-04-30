import React from "react";
import { useTheme } from "../context/ThemeContext";
export default function MenuButton({ text, pd, mode, changeMode }) {
  const { theme } = useTheme();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        changeMode(text);
      }}
    >
      <button
        type="button"
        onClick={() => changeMode(text)}
        className={`text-md card-header-category ${pd} ${theme}
        ${mode === text ? "active" : ""}`}
      >
        {text}
      </button>
    </form>
  );
}
