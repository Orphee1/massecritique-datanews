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

      // Select data to display in chart for all departments
      const [data, setData] = useState({
            dataSelected: "rea",
      });
      const { dataSelected } = data;
      let dataKeyHosp = {
            h: "hosph",
            f: "hospf",
      };
      let dataKeyRea = {
            h: "reah",
            f: "reaf",
      };
      let dataKeyDead = {
            h: "deadh",
            f: "deadf",
      };
      const dataKeySelected =
            dataSelected === "hosp"
                  ? dataKeyHosp
                  : dataSelected === "rea"
                  ? dataKeyRea
                  : dataKeyDead;
      const dataToDisplay =
            dataSelected === "hosp"
                  ? dataHospDec
                  : dataSelected === "hosp"
                  ? dataReaDec
                  : dataDeadDec;

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
                              setData({
                                    dataSelected: event.target.value,
                              });
                        }}
                  >
                        <option value="hosp">Afficher</option>
                        <option value="hosp">Patients hospitalisés</option>
                        <option value="rea">Patients en réanimation</option>
                        <option value="dead">Décès</option>
                  </select>

                  <BarChart
                        width={800}
                        height={1800}
                        layout="vertical"
                        // data={dataUpdated}
                        data={dataToDisplay}
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
                              // dataKey="hosph"
                              dataKey={dataKeySelected.h}
                              stackId="a"
                              fill="#EC6554"
                        />
                        <Bar
                              // dataKey="hospf"
                              dataKey={dataKeySelected.f}
                              stackId="a"
                              fill="#D24738"
                        />
                  </BarChart>
            </div>
      );
}
