import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "../../context/ThemeContext";

import "../../App.css";
import "./style.css";

export default function Header({ indexPage, setIndexPage }) {
      // Theme definition
      const [theme, setTheme] = useContext(ThemeContext);
      let { isLigthTheme, light, dark } = theme;
      const option = isLigthTheme ? light : dark;

      return (
            <div
                  className="header"
                  style={{
                        background: option.bg,
                  }}
            >
                  <div className="nav">
                        <ul className="d-flex">
                              <li>
                                    <Link to="/">
                                          <span
                                                className="logo"
                                                onClick={() => {
                                                      setIndexPage(1);
                                                }}
                                                style={{
                                                      color: option.syntax,
                                                }}
                                          >
                                                Masse Critique/Data News
                                          </span>
                                    </Link>
                              </li>
                              <li>
                                    <button
                                          type="button-theme"
                                          style={{ color: option.syntax }}
                                          onClick={() => {
                                                setTheme({
                                                      isLigthTheme: !isLigthTheme,
                                                      light: light,
                                                      dark: dark,
                                                });
                                          }}
                                    >
                                          {isLigthTheme
                                                ? "Mode sombre"
                                                : "Mode clair"}
                                    </button>
                              </li>
                        </ul>
                        <ul className="d-flex">
                              <li>
                                    <Link to="/data">
                                          <span
                                                style={{ color: option.syntax }}
                                          >
                                                Data
                                          </span>
                                    </Link>
                              </li>
                              <li>
                                    <span style={{ color: option.syntax }}>
                                          Articles
                                    </span>
                              </li>
                              <li>
                                    <span style={{ color: option.syntax }}>
                                          Photos/Videos
                                    </span>
                              </li>
                              <li>
                                    <span style={{ color: option.syntax }}>
                                          Sounds
                                    </span>
                              </li>
                        </ul>
                  </div>
                  <div
                        className="line red"
                        style={{ background: option.bgClear }}
                  ></div>
            </div>
      );
}
