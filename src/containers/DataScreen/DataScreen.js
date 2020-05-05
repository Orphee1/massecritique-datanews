import React, { useState, useContext } from "react";
import { VectorMap } from "@south-paw/react-vector-maps";
import { Link } from "react-router-dom";

import {
      BarChart,
      Bar,
      Cell,
      XAxis,
      YAxis,
      CartesianGrid,
      Tooltip,
      Legend,
} from "recharts";

import { ThemeContext } from "../../context/ThemeContext";

import "../../App.css";
import "./style.css";
import useWindowDimensions from "../../assets/useWindowDimension";

// Components import
import CovidChartScreen from "../../components/CovidChartScreen/CovidChartScreen";
import AllDeptsCovidChart from "../../components/AllDeptsCovidChart/AllDeptsCovidChart";
import AllDeptAgeCovidChart from "../../components/AllDeptAgeCovidChart/AllDeptAgeCovidChart";

// Icons import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Maps import
import franceDepts from "../../assets/maps/FranceDepts.json";

// Data import

import COVID2104 from "../../assets/data/COVID/COVID2104.json";
import COVID2204 from "../../assets/data/COVID/COVID2204.json";
import COVIDDcAge2204 from "../../assets/data/COVID/COVIDDcAge2204.json";
import COVIDHospAge2204 from "../../assets/data/COVID/COVIDHospAge2204.json";
import COVIDReaAge2204 from "../../assets/data/COVID/COVIDReaAge2204.json";
import COVID2504 from "../../assets/data/COVID/COVID2504.json";
import COVID2604 from "../../assets/data/COVID/COVID2604.json";

const date = "26 avril";
const dataUpdated = COVID2604;

export default function DataScreen() {
      const { height } = useWindowDimensions();
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

      // Date treatment

      let totalH = 0;
      for (let i = 0; i < dataUpdated.length; i++) {
            totalH += dataUpdated[i].hosp;
      }
      // console.log(totalH);

      let totalR = 0;
      for (let i = 0; i < dataUpdated.length; i++) {
            totalR += dataUpdated[i].rea;
      }
      // console.log(totalR);

      let totalD = 0;
      for (let i = 0; i < dataUpdated.length; i++) {
            totalD += dataUpdated[i].dead;
      }
      // console.log(totalD);

      const [hovered, setHovered] = useState("None");
      const [setFocused] = useState("None");
      const [setClicked] = useState("None");
      const [dataHToDisplay, setDataHToDisplay] = useState();
      const [dataRToDisplay, setDataRToDisplay] = useState();
      const [dataDToDisplay, setDataDToDisplay] = useState();

      const layerProps = {
            onMouseEnter: ({ target }) => {
                  setHovered(target.attributes.name.value);

                  for (let i = 0; i < dataUpdated.length; i++) {
                        if (
                              target.attributes.name.value ===
                              dataUpdated[i].dep
                        ) {
                              setDataHToDisplay(dataUpdated[i].hosp);
                              setDataRToDisplay(dataUpdated[i].rea);
                              setDataDToDisplay(dataUpdated[i].dead);
                              console.log(dataUpdated[i].hosp);
                              console.log(dataUpdated[i].rea);
                              console.log(dataUpdated[i].dc);
                        }
                  }
            },
            // setHovered(target.attributes.id.value),
            onMouseLeave: ({ target }) => setHovered("None"),
            onFocus: ({ target }) => setFocused(target.attributes.name.value),
            onBlur: ({ target }) => setFocused("None"),
            onClick: ({ target }) => setClicked(target.attributes.name.value),
            // onClick: ({ target }) => setDataToDisplay(true)
      };

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
                                          marginBottom: "0",
                                          marginTop: "0",
                                          // fontWeight: "900",
                                    }}
                              >
                                    Data
                              </h2>
                              <h3
                                    style={{
                                          color: option.syntax,
                                          fontWeight: "600",
                                          fontSize: "30px",
                                    }}
                              >
                                    Epidémie de COVID-19
                              </h3>
                        </div>
                        <div
                              className="data-flex1"
                              style={{
                                    height: height * 0.9,
                                    marginBottom: "20px",
                              }}
                        >
                              <div className="graph-covid-france-map">
                                    <VectorMap
                                          style={{ fill: option.syntax }}
                                          {...franceDepts}
                                          layerProps={layerProps}
                                          className="map"
                                    />
                              </div>
                        </div>
                        <div
                              className="data-flex2"
                              style={{
                                    height: height * 0.9,
                                    marginBottom: "20px",
                              }}
                        >
                              <div className="graph-comment1">
                                    <h4 style={{ color: option.syntax }}>
                                          Données hospitalières au {date} :
                                    </h4>
                                    <p style={{ color: option.syntax }}>
                                          Source :{" "}
                                          <a
                                                style={{ color: option.syntax }}
                                                href="https://geodes.santepubliquefrance.fr/#c=home"
                                          >
                                                Santé Publique France
                                          </a>
                                    </p>
                                    <p style={{ color: option.syntax }}>
                                          Librairie :{" "}
                                          <a
                                                style={{ color: option.syntax }}
                                                href="https://react-vector-maps.netlify.app/"
                                          >
                                                React Vector Maps
                                          </a>
                                    </p>
                              </div>
                              <div className="graph-comment2">
                                    <h4
                                          style={{
                                                color: option.syntax,
                                          }}
                                    >
                                          {hovered !== "None" && (
                                                <code>{hovered} :</code>
                                          )}
                                    </h4>

                                    {hovered !== "None" && (
                                          <>
                                                <div
                                                      style={{
                                                            marginBottom: 5,

                                                            color:
                                                                  option.syntax,
                                                      }}
                                                >
                                                      Nombre de personnes
                                                      hospitalisées pour cause
                                                      de COVID-19 :{" "}
                                                      {dataHToDisplay && (
                                                            <code>
                                                                  {
                                                                        dataHToDisplay
                                                                  }
                                                            </code>
                                                      )}
                                                </div>

                                                <div
                                                      style={{
                                                            marginBottom: 5,
                                                            color:
                                                                  option.syntax,
                                                      }}
                                                >
                                                      Nombre de personnes en
                                                      réanimation pour cause de
                                                      COVID-19 :{" "}
                                                      {dataRToDisplay && (
                                                            <code>
                                                                  {
                                                                        dataRToDisplay
                                                                  }
                                                            </code>
                                                      )}
                                                </div>
                                                <div
                                                      style={{
                                                            color:
                                                                  option.syntax,
                                                            marginBottom: 5,
                                                      }}
                                                >
                                                      Nombre de personnes
                                                      décédées depuis le début
                                                      de l'épidémie :{" "}
                                                      {dataDToDisplay && (
                                                            <code>
                                                                  {
                                                                        dataDToDisplay
                                                                  }
                                                            </code>
                                                      )}
                                                </div>
                                          </>
                                    )}
                              </div>
                              <div className="graph-comment3">
                                    <h4 style={{ color: option.syntax }}>
                                          Total national:
                                    </h4>

                                    <div>
                                          <div
                                                style={{
                                                      color: option.syntax,
                                                      marginBottom: 5,
                                                }}
                                          >
                                                Personnes actuellement
                                                hospitalisées: {totalH}
                                          </div>
                                          <div
                                                style={{
                                                      color: option.syntax,

                                                      marginBottom: 5,
                                                }}
                                          >
                                                Personnes actuellement en
                                                réanimation: {totalR}
                                          </div>
                                          <div
                                                style={{
                                                      color: option.syntax,
                                                      marginBottom: 5,
                                                }}
                                          >
                                                Personnes décédées à l'hôpital:{" "}
                                                {totalD}
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div
                              className="data-flex3"
                              style={{
                                    // height: height * 0.9,
                                    height: "100%",
                                    marginBottom: "20px",
                              }}
                        >
                              <h4 style={{ color: option.syntax }}>
                                    Impact de l'épidémie selon le sexe
                              </h4>
                              <AllDeptsCovidChart
                                    className="alldept-chart"
                                    data={dataUpdated}
                              />
                        </div>

                        <div
                              className="data-flex4"
                              style={{
                                    height: height * 0.9,
                                    marginBottom: "20px",
                              }}
                        >
                              <CovidChartScreen data={dataUpdated} />
                        </div>
                        <div
                              className="data-flex5"
                              style={{
                                    // height: height * 0.9,
                                    height: "100%",
                                    marginBottom: "20px",
                              }}
                        >
                              <h4 style={{ color: option.syntax }}>
                                    Impact de l'épidémie selon la classe d'âge
                              </h4>
                              <AllDeptAgeCovidChart />
                        </div>
                  </div>
            </div>
      );
}
