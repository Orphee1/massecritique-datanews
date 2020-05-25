import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "../../context/ThemeContext";

import "../../App.css";
import "./style.css";
import useWindowDimensions from "../../assets/useWindowDimension";

// Components import
import CovidChartScreen from "../../components/datavis/CovidChartScreen/CovidChartScreen";
import AllDeptsCovidChart from "../../components/datavis/AllDeptsCovidChart/AllDeptsCovidChart";
import AllDeptAgeCovidChart from "../../components/datavis/AllDeptAgeCovidChart/AllDeptAgeCovidChart";

import VXPage from "../../components/VXPage/VXPage";
import ReactVisPage from "../../components/ReactVisPage/ReactVisPage";

// Data import
import COVID0905 from "../../assets/data/COVID/COVID0905.json";
import COVID09DeadAge from "../../assets/data/COVID/COVID0905DeadAge.json";
import dead from "../../assets/data/COVID/COVID0905DeadAge.json";
import hosp from "../../assets/data/COVID/COVID0905HospAge.json";
import rea from "../../assets/data/COVID/COVID0905ReaAge.json";
import data from "../../assets/data/COVID/COVIDNewCase1205.json";
import dataNat from "../../assets/data/COVID/COVIDNewCaseNatio2105.json";

import C19USA from "../../assets/data/COVID/owid/C19USACasesOverTime2205.json";
import C19FRA from "../../assets/data/COVID/owid/C19FRACasesOverTime2205.json";
import C19SPA from "../../assets/data/COVID/owid/C19SPACasesOverTime2205.json";
import C19GER from "../../assets/data/COVID/owid/C19GERCasesOverTime2205.json";
import C19GBR from "../../assets/data/COVID/owid/C19GBRCasesOverTime2205.json";

// const date = "09 mai";
const dataUpdated = COVID0905;

export default function DataScreen() {
      const { height } = useWindowDimensions();
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
                        <div
                              className="data-flex0 
                        
                        "
                              // style={{ background: option.syntax }}
                        >
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

                              <div className="d-flex">
                                    <h5
                                          style={{
                                                color: option.syntax,
                                                // color: option.bg,
                                                marginBottom: "0",
                                                marginTop: "0",
                                                marginLeft: "10px",
                                          }}
                                    >
                                          Librairies:{" "}
                                          <a
                                                style={{
                                                      color: option.syntax,
                                                      cursor: "pointer",
                                                      // color: option.bg,
                                                }}
                                                // href="https://uber.github.io/react-vis/?r=m7"
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
                                                // color: option.bg,
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
                                                // href="https://vx-demo.now.sh/"
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
                              <ReactVisPage
                                    data={data}
                                    dataNat={dataNat}
                                    dataUpdated={dataUpdated}
                                    dead={dead}
                                    hosp={hosp}
                                    rea={rea}
                              />
                        ) : (
                              <VXPage
                                    data={data}
                                    dataNat={dataNat}
                                    dataUpdated={dataUpdated}
                                    dataUSA={C19USA}
                                    dataFRA={C19FRA}
                                    dataSPA={C19SPA}
                                    dataGER={C19GER}
                                    dataGBR={C19GBR}
                              />
                        )}
                  </div>
            </div>
      );
}
