import React, { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

import "../../App.css";
import "./style.css";

export default function Footer() {
      // Theme definition
      const [theme] = useContext(ThemeContext);
      const { themeSelected, themeOne, themeTwo, themeThree } = theme;
      let option;
      switch (themeSelected) {
            case "theme1":
                  option = themeOne;
                  break;
            case "theme2":
                  option = themeTwo;
                  break;
            case "theme3":
                  option = themeThree;
                  break;
      }

      return (
            <footer className="footer" style={{ background: option.bg }}>
                  <div
                        className="line"
                        style={{ background: option.syntax }}
                  ></div>
                  <div
                        className="line"
                        style={{ background: option.plus }}
                  ></div>
                  <div
                        className="line"
                        style={{ background: option.syntax }}
                  ></div>
            </footer>
      );
}
