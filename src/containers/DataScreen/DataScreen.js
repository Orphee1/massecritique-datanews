import React, { useState, useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

import "../../App.css";
import "./style.css";
import useWindowDimensions from "../../assets/useWindowDimension";

import VXPage from "../../components/VXPage/VXPage";
import ReactVisPage from "../../components/ReactVisPage/ReactVisPage";

export default function DataScreen() {
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

      // const [librarieSelected, setLibrarieSelected] = useState("react-vis");
      const [librarieSelected, setLibrarieSelected] = useState("vx");

      return (
            <div
                  className="page"
                  style={{
                        background: option.syntax,
                        marginTop: "60px",
                  }}
            >
                  <div
                        className="data-container"
                        style={{
                              background: option.bg,
                        }}
                  >
                        <div className="data-flex0">
                              <h2
                                    style={{
                                          color: option.syntax,
                                          // color: option.bg,
                                          marginBottom: "0",
                                          marginTop: "0",
                                    }}
                              >
                                    Data
                              </h2>
                              <h3
                                    style={{
                                          color: option.syntax,
                                          // color: option.bg,
                                          fontWeight: "600",
                                          fontSize: "25px",
                                    }}
                              >
                                    Epidémie de COVID-19
                              </h3>

                              <div
                                    className="d-flex"
                                    style={{ marginTop: "20px" }}
                              >
                                    <h5
                                          style={{
                                                color: option.syntax,
                                                marginBottom: "0",
                                                marginTop: "0",
                                                marginLeft: "10px",
                                          }}
                                    >
                                          Choisir une librairie de
                                          visualisation:{" "}
                                          <a
                                                style={{
                                                      color: option.syntax,
                                                      cursor: "pointer",
                                                }}
                                                onClick={() => {
                                                      setLibrarieSelected(
                                                            "react-vis"
                                                      );
                                                }}
                                          >
                                                React-Vis
                                          </a>
                                    </h5>
                                    <h5
                                          style={{
                                                color: option.syntax,
                                                marginBottom: "0",
                                                marginTop: "0",
                                                marginLeft: "10px",
                                          }}
                                    >
                                          <a
                                                style={{
                                                      color: option.syntax,
                                                      cursor: "pointer",
                                                      // color: option.bg,
                                                }}
                                                onClick={() => {
                                                      setLibrarieSelected("vx");
                                                }}
                                          >
                                                VX
                                          </a>
                                    </h5>
                              </div>
                        </div>

                        {librarieSelected === "react-vis" ? (
                              <ReactVisPage />
                        ) : (
                              <VXPage />
                        )}
                  </div>
            </div>
      );
}
