import React, { Component, useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
      const [theme, setTheme] = useState({
            isLigthTheme: true,
            light: {
                  syntax: "#373738",
                  // ui: "#ddd",
                  bg: "#05f86a",
            },
            dark: {
                  syntax: "#05f86a",
                  // ui: "#333",
                  bg: "#373738",
            },
      });

      return (
            <ThemeContext.Provider value={[theme, setTheme]}>
                  {props.children}
            </ThemeContext.Provider>
      );
};
