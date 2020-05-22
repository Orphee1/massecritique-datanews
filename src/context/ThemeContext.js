import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
      const [theme, setTheme] = useState({
            themeSelected: "theme2",

            themeOne: {
                  syntax: "#000000",
                  bgClear: "#326E6E",
                  bg: "#FFFFF0",
                  plus: "#326E6E",
            },
            themeTwo: {
                  syntax: "#FFFFF0",
                  bgClear: "#99444B",
                  bg: "#000000",
                  plus: "#99444B",
            },

            themeThree: {
                  syntax: "white",
                  bgClear: "#81F49",
                  bg: "#2737AD",
                  plus: "#81F499",
            },
      });

      return (
            <ThemeContext.Provider value={[theme, setTheme]}>
                  {props.children}
            </ThemeContext.Provider>
      );
};
