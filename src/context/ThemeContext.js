import React, { Component, useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
      const [theme, setTheme] = useState({
            isLigthTheme: true,
            light: {
                  syntax: "#373738",
                  // graph: "black",
                  graph: "#373738",
                  bg: "#05f86a",
            },
            dark: {
                  syntax: "#05f86a",
                  // graph: "white",
                  graph: "#05f86a",
                  bg: "#373738",
            },
      });

      return (
            <ThemeContext.Provider value={[theme, setTheme]}>
                  {props.children}
            </ThemeContext.Provider>
      );
};
