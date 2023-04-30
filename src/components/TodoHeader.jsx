import React from "react";
import MenuButton from "./MenuButton";
import { useTheme } from "../context/ThemeContext";
export default function ListHeader({ changeMode, mode }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`card-header flex px-3 rounded-t-xl items-center font-semibold justify-between ${theme}`}
    >
      <div className="flex">
        <MenuButton text="All" changeMode={changeMode} mode={mode} />
        <MenuButton
          text="Active"
          pd="pl-4"
          changeMode={changeMode}
          mode={mode}
        />
        <MenuButton
          text="Completed"
          pd="pl-4"
          changeMode={changeMode}
          mode={mode}
        />
      </div>

      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={theme === "light" ? "black" : "white"}
          className="w-6 h-6"
          onClick={() => toggleTheme()}
        >
          <path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      </button>
    </div>
  );
}
