import React, { useState, useContext } from "react";

import {
      BarChart,
      Bar,
      XAxis,
      YAxis,
      CartesianGrid,
      Tooltip,
      Legend,
} from "recharts";
import { ThemeContext } from "../../context/ThemeContext";
import { DataContext } from "../../context/DataContext";

import "../../App.css";
import "./style.css";
import useWindowDimensions from "../../assets/useWindowDimension";

import COVID2104 from "../../assets/data/COVID/COVID2104.json";
const dataUpdated = COVID2104;

export default function AllDeptsCovidChart() {
      // Theme definition
      const [theme] = useContext(ThemeContext);
      let { isLigthTheme, light, dark } = theme;
      const option = isLigthTheme ? light : dark;

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
      const dataHospDec = dataUpdated.sort(compareHospDec);

      // Sort data according to rea value

      function compareReaDec(a, b) {
            const reaA = a.rea;
            const reaB = b.rea;
            let comparison = 0;
            if (reaA < reaB) {
                  comparison = 1;
            } else if (reaA > reaB) {
                  comparison = -1;
            }
            return comparison;
      }
      const dataReaDec = dataUpdated.sort(compareReaDec);

      // Sort data according to dead value

      function compareDeadDec(a, b) {
            const deadA = a.dead;
            const deadB = b.dead;
            let comparison = 0;
            if (deadA < deadB) {
                  comparison = 1;
            } else if (deadA > deadB) {
                  comparison = -1;
            }
            return comparison;
      }
      const dataDeadDec = dataUpdated.sort(compareDeadDec);

      const [dataSelected, setDataSelected] = useState("hosp");
      console.log(dataSelected);

      // // Managing data display
      // const [data] = useContext(DataContext);
      // let { dataSelected, dataKeyHosp, dataKeyRea, dataKeyDead } = data;
      // let dataKeySelected;

      // console.log(dataSelected);
      // console.log(dataKeyHosp);
      // console.log(dataKeyRea);
      // // let dataToDisplay;
      // switch (dataSelected) {
      //       case "hosp":
      //             dataKeySelected = dataKeyHosp;
      //             // dataToDisplay = dataHospDec;
      //             return;
      //       case "rea":
      //             dataKeySelected = dataKeyRea;
      //             // dataToDisplay = dataReaDec;

      //             return;
      //       case "hosp":
      //             dataKeySelected = dataKeyDead;
      //             // dataToDisplay = dataDeadDec;

      //             return;
      // }
      // console.log(dataKeySelected);

      return (
            <div>
                  <p
                        style={{
                              color: option.syntax,
                              fontWeight: "bold",
                        }}
                  ></p>
                  <select
                        className="hosp-rea-dead-select"
                        onChange={(event) => {
                              setDataSelected(event.target.value);
                        }}
                  >
                        <option value="hosp">Afficher</option>
                        <option value="hosp">Patients hospitalisés</option>
                        <option value="rea">Patients en réanimation</option>
                        <option value="dead">Décès</option>
                  </select>
                  {dataSelected === "hosp" ? (
                        <BarChart
                              width={800}
                              height={1800}
                              layout="vertical"
                              // data={dataUpdated}
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
                              <XAxis type="number" stroke={option.syntax} />
                              <YAxis
                                    type="category"
                                    dataKey="dep"
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
                                    // dataKey={dataKeyH}
                                    stackId="a"
                                    fill="#EC6554"
                              />
                              <Bar
                                    dataKey="hospf"
                                    // dataKey={dataKeyF}
                                    stackId="a"
                                    fill="#D24738"
                              />
                        </BarChart>
                  ) : dataSelected === "rea" ? (
                        <BarChart
                              width={800}
                              height={1800}
                              layout="vertical"
                              // data={dataUpdated}
                              data={dataReaDec}
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
                              <XAxis type="number" stroke={option.syntax} />
                              <YAxis
                                    type="category"
                                    dataKey="dep"
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
                                    dataKey="reah"
                                    // dataKey={dataKeyH}
                                    stackId="a"
                                    fill="#EC6554"
                              />
                              <Bar
                                    dataKey="reaf"
                                    // dataKey={dataKeyF}
                                    stackId="a"
                                    fill="#D24738"
                              />
                        </BarChart>
                  ) : (
                        <BarChart
                              width={800}
                              height={1800}
                              layout="vertical"
                              // data={dataUpdated}
                              data={dataDeadDec}
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
                              <XAxis type="number" stroke={option.syntax} />
                              <YAxis
                                    type="category"
                                    dataKey="dep"
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
                                    dataKey="deadh"
                                    // dataKey={dataKeyH}
                                    stackId="a"
                                    fill="#EC6554"
                              />
                              <Bar
                                    dataKey="deadf"
                                    // dataKey={dataKeyF}
                                    stackId="a"
                                    fill="#D24738"
                              />
                        </BarChart>
                  )}
            </div>
      );
}
