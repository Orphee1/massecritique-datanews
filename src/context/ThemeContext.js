import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
      const [theme, setTheme] = useState({
            isLigthTheme: true,
            light: {
                  syntax: "#706C61",
                  bgClear: "#86DDC4",
                  bg: "#81F499",
            },
            dark: {
                  syntax: "#81F499",
                  bgClear: "#899E8B",
                  bg: "#706C61",
            },
      });

      return (
            <ThemeContext.Provider value={[theme, setTheme]}>
                  {props.children}
            </ThemeContext.Provider>
      );
};
