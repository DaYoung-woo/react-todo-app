import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
const MenuButton: React.FC<MenuButtonProps> = ({ text, pd, mode, changeMode }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <form
      onSubmit={e => {
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
};

export default MenuButton;
