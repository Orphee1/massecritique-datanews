import React, { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

import "../../App.css";
import "./style.css";

export default function Footer() {
      // Theme definition
      const [theme] = useContext(ThemeContext);
      let { isLigthTheme, light, dark } = theme;
      const option = isLigthTheme ? light : dark;

      return (
            <footer className="footer" style={{ background: option.syntax }}>
                  <div
                        className="line"
                        style={{ background: option.bgClear }}
                  ></div>
            </footer>
      );
}
