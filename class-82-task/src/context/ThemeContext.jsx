import React, { createContext, useState } from "react";

export const DataContext = createContext();

const ThemeContext = (props) => {
  const [theme, setTheme] = useState("light");
  const [color, setColor] = useState("white");

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      setColor(newTheme === "light" ? "white" : "black");
      return newTheme;
    });
  };

  const dataTheme = {
    name: "Naved",
    theme,
    toggleTheme,
    color,
  };

  return (
    <DataContext.Provider value={dataTheme}>
      {props.children}
    </DataContext.Provider>
  );
};

export default ThemeContext;
