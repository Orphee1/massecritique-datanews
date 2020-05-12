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
import { ThemeContext } from "../../../context/ThemeContext";

import "../../App.css";
import "./style.css";
import useWindowDimensions from "../../../assets/useWindowDimension";

// import COVID2104 from "../../assets/data/COVID/COVID2104.json";
// const dataUpdated = COVID2104;

export default function AllDeptsCovidChart({ data }) {
      const { width } = useWindowDimensions();
      console.log(width);

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
      // const dataHospDec = dataUpdated.sort(compareHospDec);

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

      // const dataReaDec = dataUpdated.sort(compareReaDec);

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
      // const dataDeadDec = dataUpdated.sort(compareDeadDec);

      // Select data to display in chart for all departments
      const [dataOK, setDataOK] = useState({
            dataSelected: "hosp",
      });
      const { dataSelected } = dataOK;
      const dataKeyHosp = {
            h: "hosph",
            f: "hospf",
      };
      const dataKeyRea = {
            h: "reah",
            f: "reaf",
      };
      const dataKeyDead = {
            h: "deadh",
            f: "deadf",
      };

      let dataKeySelected;
      let dataToDisplay;
      switch (dataSelected) {
            case "hosp":
                  dataKeySelected = dataKeyHosp;
                  dataToDisplay = data.sort(compareHospDec);
                  break;
            case "rea":
                  dataKeySelected = dataKeyRea;
                  dataToDisplay = data.sort(compareReaDec);
                  break;
            case "dead":
                  dataKeySelected = dataKeyDead;
                  dataToDisplay = data.sort(compareDeadDec);
                  break;
      }

      return (
            <div className="component">
                  <p
                        style={{
                              color: option.syntax,

                              fontWeight: "bold",
                        }}
                        className=""
                  >
                        Librairie :{" "}
                        <a
                              style={{
                                    color: option.syntax,
                                    fontWeight: "bold",
                              }}
                              href="http://recharts.org/en-US/"
                        >
                              Recharts
                        </a>
                  </p>
                  <select
                        className="hosp-rea-dead-select"
                        onChange={(event) => {
                              setDataOK({
                                    dataSelected: event.target.value,
                              });
                        }}
                  >
                        <option value="hosp">Patients hospitalisés</option>
                        <option value="rea">Patients en réanimation</option>
                        <option value="dead">Décès</option>
                  </select>

                  <BarChart
                        width={width * 0.8}
                        height={1800}
                        layout="vertical"
                        // data={data}
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
                        <XAxis
                              type="number"
                              stroke={option.syntax}
                              orientation="top"
                        />
                        <YAxis
                              type="category"
                              dataKey="dep"
                              interval={0}
                              stroke={option.syntax}
                              width={110}
                        />
                        <Tooltip cursor={false} />
                        {/* <Legend
                              width={200}
                              wrapperStyle={{
                                    top: 1780,
                                    right: 150,
                                    backgroundColor: option.bgClear,
                                    border: "3px solid",
                                    borderColor: option.syntax,
                                    lineHeight: "30px",
                              }}
                        /> */}
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
