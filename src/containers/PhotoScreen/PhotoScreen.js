import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "../../App.css";
import "./style.css";

export default function PhotoScreen() {
      // Theme definition
      const [theme] = useContext(ThemeContext);
      const { themeSelected, themeOne, themeTwo, themeThree } = theme;
      let option;
      let selected;
      switch (themeSelected) {
            case "theme1":
                  option = themeOne;
                  selected = "selected1";
                  break;
            case "theme2":
                  option = themeTwo;
                  selected = "selected2";
                  break;
            case "theme3":
                  option = themeThree;
                  selected = "selected3";
                  break;
      }
      return (
            <div
                  className="page"
                  style={{
                        background: option.syntax,
                  }}
            >
                  <div
                        className="photo-container"
                        style={{ background: option.bg }}
                  >
                        <div className="photo-flex0">
                              <div className="photo-flex0">
                                    <h2
                                          style={{
                                                color: option.syntax,
                                          }}
                                    >
                                          Photos
                                    </h2>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
