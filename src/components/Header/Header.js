import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "../../context/ThemeContext";

import "../../App.css";
import "./style.css";

export default function Header({ indexPage, setIndexPage }) {
      // Theme definition
      const [theme, setTheme] = useContext(ThemeContext);
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
                                    <select
                                          onChange={(event) => {
                                                setTheme({
                                                      themeSelected:
                                                            event.target.value,
                                                      themeOne: themeOne,
                                                      themeTwo: themeTwo,
                                                      themeThree: themeThree,
                                                });
                                          }}
                                    >
                                          <option value="theme1">
                                                theme 1
                                          </option>
                                          <option value="theme2">
                                                theme 2
                                          </option>
                                          <option value="theme3">
                                                theme 3
                                          </option>
                                    </select>
                              </li>
                        </ul>
                        <ul className="d-flex mini-nav">
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
                                    <Link to="/article">
                                          <span
                                                style={{ color: option.syntax }}
                                          >
                                                Articles
                                          </span>
                                    </Link>
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
                        className="line"
                        style={{ background: option.syntax }}
                  ></div>
                  <div
                        className="line2"
                        style={{ background: option.plus }}
                  ></div>
                  <div
                        className="line2"
                        style={{ background: option.syntax }}
                  ></div>
            </div>
      );
}
