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

// Icons import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Maps import
import franceDepts from "../../assets/maps/FranceDepts.json";

// Data import
import COVIDhrd2004 from "../../assets/data/COVID/COVIDhrd2004.json";

const date = "20 avril";

export default function DataScreen() {
      const { width, height } = useWindowDimensions();
      // Theme definition
      const [theme, setTheme] = useContext(ThemeContext);
      let { isLigthTheme, light, dark } = theme;
      const option = isLigthTheme ? light : dark;

      // Date treatment

      let totalH = 0;
      for (let i = 0; i < COVIDhrd2004.length; i++) {
            totalH += COVIDhrd2004[i].hosp;
      }
      // console.log(totalH);

      let totalR = 0;
      for (let i = 0; i < COVIDhrd2004.length; i++) {
            totalR += COVIDhrd2004[i].rea;
      }
      // console.log(totalR);

      let totalD = 0;
      for (let i = 0; i < COVIDhrd2004.length; i++) {
            totalD += COVIDhrd2004[i].dead;
      }
      // console.log(totalD);

      // Sort data according to hosp value

      function compareHospDec(a, b) {
            const hospA = a.hosp;
            const hospB = b.hosp;
            let comparison = 0;
            if (hospA < hospB) {
                  comparison = 1;
            } else if (hospA > hospB) {
                  comparison = -1;
            }
            return comparison;
      }
      const dataHospDec = COVIDhrd2004.sort(compareHospDec);

      // Sort data according to rea value

      const [hovered, setHovered] = useState("None");
      const [focused, setFocused] = useState("None");
      const [clicked, setClicked] = useState("None");
      const [dataHToDisplay, setDataHToDisplay] = useState();
      const [dataRToDisplay, setDataRToDisplay] = useState();
      const [dataDToDisplay, setDataDToDisplay] = useState();

      const layerProps = {
            onMouseEnter: ({ target }) => {
                  setHovered(target.attributes.name.value);

                  for (let i = 0; i < COVIDhrd2004.length; i++) {
                        if (
                              target.attributes.name.value ===
                              COVIDhrd2004[i].dep
                        ) {
                              setDataHToDisplay(COVIDhrd2004[i].hosp);
                              setDataRToDisplay(COVIDhrd2004[i].rea);
                              setDataDToDisplay(COVIDhrd2004[i].dead);
                              console.log(COVIDhrd2004[i].hosp);
                              console.log(COVIDhrd2004[i].rea);
                              console.log(COVIDhrd2004[i].dc);
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
                  style={{ background: option.bg, marginTop: "20px" }}
            >
                  <div
                        className="title"
                        style={{ justifyContent: "space-around" }}
                  >
                        <h3 className="" style={{ color: option.syntax }}>
                              Epidémie de COVID-19
                        </h3>
                  </div>
                  <div className="data-container">
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
                                                Nombre de personnes
                                                hospitalisées: {totalH}
                                          </div>
                                          <div
                                                style={{
                                                      color: option.syntax,

                                                      marginBottom: 5,
                                                }}
                                          >
                                                Nombre de personnes en
                                                réanimation: {totalR}
                                          </div>
                                          <div
                                                style={{
                                                      color: option.syntax,
                                                      marginBottom: 5,
                                                }}
                                          >
                                                Nombre de personnes décédées:{" "}
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
                              <p
                                    style={{
                                          color: option.syntax,
                                          fontWeight: "bold",
                                    }}
                              >
                                    Patients hospitalisés:
                              </p>
                              <BarChart
                                    width={800}
                                    height={1800}
                                    layout="vertical"
                                    // data={COVIDhrd2004}
                                    data={dataHospDec}
                                    margin={{
                                          top: 5,
                                          right: 5,
                                          bottom: 5,
                                          left: 105,
                                    }}
                              >
                                    <CartesianGrid
                                          strokeDasharray="3 3"
                                          stroke={option.syntax}
                                    />
                                    <XAxis
                                          type="number"
                                          stroke={option.syntax}
                                    />
                                    <YAxis
                                          type="category"
                                          dataKey="dep"
                                          // interval="preserveEnd"
                                          // interval="preserveStart"
                                          interval={0}
                                          stroke={option.syntax}
                                          width={110}
                                    />
                                    <Tooltip />
                                    <Legend
                                          width={200}
                                          wrapperStyle={{
                                                top: 1780,
                                                right: 150,
                                                backgroundColor: option.bgClear,
                                                border: "3px solid",
                                                borderColor: option.syntax,
                                                lineHeight: "30px",
                                          }}
                                    />
                                    <Bar
                                          dataKey="hosph"
                                          stackId="a"
                                          fill="#EC6554"
                                    />
                                    <Bar
                                          dataKey="hospf"
                                          stackId="a"
                                          fill="#D24738"
                                    />
                                    {/* <Bar
                                          dataKey="reah"
                                          stackId="b"
                                          fill="#BA3528"
                                    />
                                    <Bar
                                          dataKey="reaf"
                                          stackId="b"
                                          fill="#A02519"
                                    />

                                    <Bar
                                          dataKey="deadh"
                                          stackId="c"
                                          fill="#8B2E31"
                                    />

                                    <Bar
                                          dataKey="deadf"
                                          stackId="c"
                                          fill="#792022"
                                    /> */}
                              </BarChart>
                        </div>

                        <div
                              className="data-flex4"
                              style={{
                                    height: height * 0.9,
                                    marginBottom: "20px",
                              }}
                        >
                              <CovidChartScreen data={COVIDhrd2004} />
                        </div>
                  </div>
            </div>
      );
}
