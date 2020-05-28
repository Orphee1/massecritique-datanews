import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "../../context/ThemeContext";

import "../../App.css";
import "./style.css";

export default function Header({ setIndexPage }) {
      // Theme definition
      const [theme, toggleTheme] = useContext(ThemeContext);
      const { themeSelected, themeOne, themeTwo, themeThree } = theme;
      let option;
      let hoverOption;
      switch (themeSelected) {
            case "theme1":
                  option = themeOne;
                  hoverOption = "span1";
                  break;
            case "theme2":
                  option = themeTwo;
                  hoverOption = "span2";
                  break;
            case "theme3":
                  option = themeThree;
                  hoverOption = "span3";
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
                                                // className="logo"
                                                className={`${hoverOption} logo`}
                                                onClick={() => {
                                                      setIndexPage(1);
                                                }}
                                                style={{
                                                      color: option.syntax,
                                                }}
                                          >
                                                Data News
                                          </span>
                                    </Link>
                              </li>
                              <li>
                                    <select
                                          className="theme-select"
                                          onChange={(event) => {
                                                toggleTheme(event.target.value);
                                          }}
                                    >
                                          <option value="theme2">
                                                mode sombre
                                          </option>
                                          <option value="theme1">
                                                mode clair
                                          </option>
                                          <option value="theme3">
                                                mode couleur
                                          </option>
                                    </select>
                              </li>
                        </ul>
                        <ul className="d-flex mini-nav">
                              <li>
                                    <Link to="/data">
                                          <span
                                                className={hoverOption}
                                                style={{ color: option.syntax }}
                                          >
                                                Data
                                          </span>
                                    </Link>
                              </li>
                              <li>
                                    <Link to="/article">
                                          <span
                                                className={hoverOption}
                                                style={{ color: option.syntax }}
                                          >
                                                Articles
                                          </span>
                                    </Link>
                              </li>
                              <li>
                                    <Link to="/video">
                                          <span
                                                className={hoverOption}
                                                style={{ color: option.syntax }}
                                          >
                                                Videos
                                          </span>
                                    </Link>
                              </li>
                              <li>
                                    <Link to="/photo">
                                          <span
                                                className={hoverOption}
                                                style={{ color: option.syntax }}
                                          >
                                                Photos
                                          </span>
                                    </Link>
                              </li>
                              <li>
                                    <Link to="/sound">
                                          <span
                                                className={hoverOption}
                                                style={{ color: option.syntax }}
                                          >
                                                Sounds
                                          </span>
                                    </Link>
                              </li>
                        </ul>
                  </div>
                  <div
                        className="line"
                        style={{ background: option.plus }}
                  ></div>
                  <div
                        className="line2"
                        style={{ background: option.bg }}
                  ></div>
                  <div
                        className="line2"
                        style={{ background: option.syntax }}
                  ></div>
            </div>
      );
}
