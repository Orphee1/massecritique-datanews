import React, { useState, useContext } from "react";
import { VectorMap } from "@south-paw/react-vector-maps";
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

// Images import
import France from "../../images/data/France.png";

// Maps import
import franceDepts from "../../assets/maps/FranceDepts.json";

// Data import
import COVID1204hrds from "../../assets/data/COVID/COVIDhrsd1204.json";
import COVID1404hrds from "../../assets/data/COVID/COVIDhrds1404.json";

const date = "14 avril";

export default function DataScreen() {
      // Theme definition
      const [theme, setTheme] = useContext(ThemeContext);
      let { isLigthTheme, light, dark } = theme;
      const option = isLigthTheme ? light : dark;

      // Treatment of Covid's data from datagouv

      let totalH = 0;
      for (let i = 0; i < COVID1404hrds.length; i += 3) {
            totalH += COVID1404hrds[i].hosp;
      }
      // console.log(totalH);

      let totalR = 0;
      for (let i = 0; i < COVID1404hrds.length; i += 3) {
            totalR += COVID1404hrds[i].rea;
      }
      // console.log(totalR);

      let totalD = 0;
      for (let i = 0; i < COVID1404hrds.length; i += 3) {
            totalD += COVID1404hrds[i].dc;
      }
      // console.log(totalD);

      let totalS = 0;
      for (let i = 0; i < COVID1404hrds.length; i += 3) {
            totalS += COVID1404hrds[i].rad;
      }

      const [hovered, setHovered] = useState("None");
      const [focused, setFocused] = useState("None");
      const [clicked, setClicked] = useState("None");
      const [dataHToDisplay, setDataHToDisplay] = useState();
      const [dataRToDisplay, setDataRToDisplay] = useState();
      const [dataDToDisplay, setDataDToDisplay] = useState();

      const layerProps = {
            onMouseEnter: ({ target }) => {
                  setHovered(target.attributes.name.value);

                  // setState with Geocodes's data

                  //       for (let i = 0; i < Covid0304.length; i++) {
                  //             if (target.attributes.name.value === Covid0304[i].dep) {
                  //                   setDataHToDisplay(Covid0304[i].hosp);
                  //                   setDataRToDisplay(Covid0304[i].rea);
                  //                   setDataDToDisplay(Covid0304[i].dead);
                  //                   console.log(Covid0304[i].hosp);
                  //                   console.log(Covid0304[i].dead);
                  //                   console.log(Covid0304[i].rea);
                  //             }
                  //       }
                  // },

                  // setState with Data.gouv's data
                  let str1 = "fr-0";

                  for (let i = 0; i < COVID1404hrds.length - 276; i += 3) {
                        str1 = "fr-0" + COVID1404hrds[i].dep;
                        console.log(str1);

                        if (target.attributes.id.value === str1) {
                              setDataHToDisplay(COVID1404hrds[i].hosp);
                              setDataRToDisplay(COVID1404hrds[i].rea);
                              setDataDToDisplay(COVID1404hrds[i].dc);
                              // console.log(COVID1404hrds[i].hosp);
                              // console.log(COVID1404hrds[i].rea);
                              // console.log(COVID1404hrds[i].dc);
                        }
                  }

                  let str2 = "fr-";
                  for (let i = 27; i < COVID1404hrds.length; i += 3) {
                        str2 = "fr-" + COVID1404hrds[i].dep;
                        console.log(str2);
                        if (target.attributes.id.value === str2) {
                              setDataHToDisplay(COVID1404hrds[i].hosp);
                              setDataRToDisplay(COVID1404hrds[i].rea);
                              setDataDToDisplay(COVID1404hrds[i].dc);
                              // console.log(COVID1404hrds[i].hosp);
                              // console.log(COVID1404hrds[i].rea);
                              // console.log(COVID1404hrds[i].dc);
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

      let newArray = [];

      for (let i = 0; i < COVID1404hrds.length; i += 3) {
            newArray.push(COVID1404hrds.slice(i, i + 3));
      }

      return (
            <div className="page" style={{ background: option.bg }}>
                  <h3 className="title" style={{ color: option.syntax }}>
                        Epidémie de COVID-19
                  </h3>
                  <div className="data-container">
                        <div className="data-flex1">
                              <div className="graph-covid-france-map">
                                    <VectorMap
                                          style={{ fill: option.graph }}
                                          {...franceDepts}
                                          layerProps={layerProps}
                                          className="map"
                                    />
                              </div>
                        </div>
                        <div className="data-flex2">
                              <div className="graph-comment1">
                                    <h4 style={{ color: option.syntax }}>
                                          Données hospitalières au {date} :
                                    </h4>
                                    <p style={{ color: option.syntax }}>
                                          Source :{" "}
                                          <a
                                                style={{ color: option.syntax }}
                                                href="https://www.data.gouv.fr/fr/datasets/donnees-hospitalieres-relatives-a-lepidemie-de-covid-19/#_"
                                          >
                                                data.gouv.fr
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
                                          <div style={{ color: option.syntax }}>
                                                Nombre de personnes retournées à
                                                leur domicile: {totalS}
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <div className="data-flex3">
                              {COVID1404hrds.map((elem, index) => {
                                    let dataArray = [];
                                    dataArray.push(elem);
                                    return (
                                          <div className="barchart-container">
                                                <BarChart
                                                      className="bar-chart"
                                                      width={500}
                                                      height={500}
                                                      data={dataArray}
                                                      margin={{
                                                            top: 5,
                                                            right: 30,
                                                            left: 20,
                                                            bottom: 5,
                                                      }}
                                                >
                                                      <CartesianGrid
                                                            strokeDasharray="3 3"
                                                            // fill={option.syntax}
                                                      />
                                                      <XAxis dataKey="dep" />
                                                      <YAxis
                                                            fill={option.syntax}
                                                      />
                                                      <Tooltip />
                                                      <Legend />
                                                      <Bar
                                                            dataKey="hosp"
                                                            barSize={60}
                                                            // fill="black"
                                                            fill={option.syntax}
                                                      />
                                                      <Bar
                                                            dataKey="rea"
                                                            barSize={60}
                                                            // fill="black"
                                                            fill={option.syntax}
                                                      />
                                                      <Bar
                                                            dataKey="rad"
                                                            barSize={60}
                                                            // fill="black"
                                                            fill={option.syntax}
                                                      />
                                                      <Bar
                                                            dataKey="dc"
                                                            barSize={60}
                                                            // fill="black"
                                                            fill={option.syntax}
                                                      />
                                                </BarChart>
                                          </div>
                                    );
                              })}
                        </div>
                  </div>
            </div>
      );
}
