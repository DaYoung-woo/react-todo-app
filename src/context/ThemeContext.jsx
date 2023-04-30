import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (localStorage.getItem("theme")) setTheme(localStorage.getItem("theme"));
  }, []);

  return (
    <div className={`App justify-center items-center ${theme}`}>
      <div className={`rounded-xl card-size drop-shadow-2xl ${theme}`}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export const useTheme = () => useContext(ThemeContext);
