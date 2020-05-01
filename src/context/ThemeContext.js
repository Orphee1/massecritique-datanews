import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
      const [theme, setTheme] = useState({
            themeSelected: "theme3",
            themeOne: {
                  syntax: "#706C61",
                  bgClear: "#86DDC4",
                  bg: "#81F499",
                  plus: "#81F499",
            },
            themeTwo: {
                  syntax: "#81F499",
                  bgClear: "#899E8B",
                  bg: "#706C61",
                  plus: "#81F499",
            },
            themeThree: {
                  syntax: "#000000",
                  bgClear: "#326E6E",
                  bg: "#FFFFF0",
                  plus: "#1E3618",
            },
      });

      return (
            <ThemeContext.Provider value={[theme, setTheme]}>
                  {props.children}
            </ThemeContext.Provider>
      );
};
