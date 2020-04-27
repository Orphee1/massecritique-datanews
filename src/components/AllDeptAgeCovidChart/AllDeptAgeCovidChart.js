import React, { useState, useContext } from "react";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { ThemeContext } from "../../context/ThemeContext";

import "../../App.css";
import "./style.css";

// Component import
import CustomTooltip from "../../components/CustomToolTip/CustomToolTip";

// Data import
import COVIDDcAge2204 from "../../assets/data/COVID/COVIDDcAge2204.json";
import COVIDHospAge2204 from "../../assets/data/COVID/COVIDHospAge2204.json";
import COVIDReaAge2204 from "../../assets/data/COVID/COVIDReaAge2204.json";

import COVIDDcAge2604 from "../../assets/data/COVID/COVIDDcAge2604.json";
import COVIDHospAge2604 from "../../assets/data/COVID/COVIDHospAge2604.json";
import COVIDReaAge2604 from "../../assets/data/COVID/COVIDReaAge2604.json";

const optionReg = [
      "Île-de-France",
      "Guadeloupe",
      "Martinique",
      "Guyane",
      "La Réunion",
      "Mayotte",
      "Centre-Val de Loire",
      "Bourgogne-Franche-Comté",
      "Normandie",
      "Hauts-de-France",
      "Grand-Est",
      "Pays de la Loire",
      "Bretagne",
      "Nouvelle-Aquitaine",
      "Occitanie",
      "Auvergne-Rhône-Alpes",
      "Provence-Alpes-Côte d'Azur",
      "Corse",
];

const options = [];
for (let i = 0; i < optionReg.length; i++) {
      options.push(
            <option key={i} value={optionReg[i]}>
                  {optionReg[i]}
            </option>
      );
}

export default function AllDeptAgeCovidChart() {
      // Theme definition
      const [theme] = useContext(ThemeContext);
      let { isLigthTheme, light, dark } = theme;
      const option = isLigthTheme ? light : dark;

      const [regSelected, setRegSelected] = useState("Île-de-France");
      const [mode, setMode] = useState("absolute");
      console.log(mode);

      let dataDc = [];

      for (let i = 0; i < COVIDDcAge2604.length; i++) {
            if (COVIDDcAge2604[i].Libellé === regSelected) {
                  dataDc.push(COVIDDcAge2604[i]);
            }
      }

      let dataHosp = [];
      for (let i = 0; i < COVIDHospAge2604.length - 1; i++) {
            if (COVIDHospAge2604[i].Libellé === regSelected) {
                  dataHosp.push(COVIDHospAge2604[i]);
            }
      }

      let dataRea = [];
      for (let i = 0; i < COVIDReaAge2604.length - 1; i++) {
            if (COVIDReaAge2604[i].Libellé === regSelected) {
                  dataRea.push(COVIDReaAge2604[i]);
            }
      }

      return (
            <div className="compo-graph">
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
                  <div className="fl-col a-start">
                        <select
                              className="ref-select mb-10 "
                              onChange={(event) => {
                                    setRegSelected(event.target.value);
                              }}
                        >
                              {options}
                        </select>
                        <p
                              style={{
                                    color: option.syntax,
                              }}
                        >
                              Afficher les données
                        </p>
                        <select
                              className="ref-select mb-10 "
                              onChange={(event) => {
                                    setMode(event.target.value);
                              }}
                        >
                              <option value="absolute">
                                    En valeurs absolues
                              </option>
                              <option value="relative">En pourcentage</option>
                        </select>
                  </div>
                  <div className="fl-col center">
                        <p
                              style={{
                                    color: option.syntax,
                                    fontWeight: "bold",
                              }}
                        >
                              Décès
                        </p>
                        <BarChart
                              width={800}
                              height={580}
                              data={dataDc}
                              margin={{
                                    top: 25,
                                    // right: 5,
                                    bottom: 25,
                                    left: 125,
                              }}
                        >
                              <CartesianGrid
                                    strokeDasharray="3 3"
                                    stroke={option.syntax}
                              />
                              <XAxis dataKey="Libellé" stroke={option.syntax} />
                              <YAxis type="number" stroke={option.syntax} />
                              <Tooltip
                                    cursor={false}
                                    content={
                                          mode === "absolute" ? (
                                                <CustomTooltip
                                                      type="Nombre"
                                                      value9={dataDc[0].dc09}
                                                      value19={dataDc[0].dc1019}
                                                      value29={dataDc[0].dc2029}
                                                      value39={dataDc[0].dc3039}
                                                      value49={dataDc[0].dc4049}
                                                      value59={dataDc[0].dc5059}
                                                      value69={dataDc[0].dc6069}
                                                      value79={dataDc[0].dc7079}
                                                      value89={dataDc[0].dc8089}
                                                      value90={dataDc[0].dc90}
                                                      total={dataDc[0].dc}
                                                />
                                          ) : (
                                                <CustomTooltip
                                                      type="%"
                                                      value9={dataDc[0].rel09}
                                                      value19={
                                                            dataDc[0].rel1019
                                                      }
                                                      value29={
                                                            dataDc[0].rel2029
                                                      }
                                                      value39={
                                                            dataDc[0].rel3039
                                                      }
                                                      value49={
                                                            dataDc[0].rel4049
                                                      }
                                                      value59={
                                                            dataDc[0].rel5059
                                                      }
                                                      value69={
                                                            dataDc[0].rel6069
                                                      }
                                                      value79={
                                                            dataDc[0].rel7079
                                                      }
                                                      value89={
                                                            dataDc[0].rel8089
                                                      }
                                                      value90={dataDc[0].rel90}
                                                      total=""
                                                />
                                          )
                                    }
                                    wrapperStyle={{
                                          width: 250,
                                          color: option.syntax,
                                          backgroundColor: option.bgClear,
                                    }}
                                    allowEscapeViewBox={{ x: true, y: true }}
                                    animationDuration={2000}
                                    animationEasing="ease-in-out"
                              />

                              <Bar
                                    dataKey={
                                          mode === "absolute" ? "dc09" : "rel09"
                                    }
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                              <Bar
                                    dataKey={
                                          mode === "absolute"
                                                ? "dc1019"
                                                : "rel1019"
                                    }
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                              <Bar
                                    dataKey={
                                          mode === "absolute"
                                                ? "dc2029"
                                                : "rel2029"
                                    }
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                              <Bar
                                    dataKey={
                                          mode === "absolute"
                                                ? "dc3039"
                                                : "rel3039"
                                    }
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                              <Bar
                                    dataKey={
                                          mode === "absolute"
                                                ? "dc4049"
                                                : "rel4049"
                                    }
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                              <Bar
                                    dataKey={
                                          mode === "absolute"
                                                ? "dc5059"
                                                : "rel5059"
                                    }
                                    // dataKey="rel5059"
                                    // dataKey="dc5059"
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                              <Bar
                                    dataKey={
                                          mode === "absolute"
                                                ? "dc6069"
                                                : "rel6069"
                                    }
                                    // dataKey="dc6069"
                                    // dataKey="rel6069"
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                              <Bar
                                    dataKey={
                                          mode === "absolute"
                                                ? "dc7079"
                                                : "rel7079"
                                    }
                                    // dataKey="rel7079"
                                    // dataKey="dc7079"
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                              <Bar
                                    dataKey={
                                          mode === "absolute"
                                                ? "dc8089"
                                                : "rel8089"
                                    }
                                    // dataKey="rel8089"
                                    // dataKey="dc8089"
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                              <Bar
                                    dataKey={
                                          mode === "absolute" ? "dc90" : "rel90"
                                    }
                                    // dataKey="dc90"
                                    // dataKey="rel90"
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                        </BarChart>
                  </div>
                  <div className="fl-col center">
                        <p
                              style={{
                                    color: option.syntax,
                                    fontWeight: "bold",
                              }}
                        >
                              Patients hospitalisés
                        </p>
                        <BarChart
                              width={800}
                              height={580}
                              data={dataHosp}
                              margin={{
                                    top: 25,
                                    // right: 5,
                                    bottom: 25,
                                    left: 125,
                              }}
                        >
                              <CartesianGrid
                                    strokeDasharray="3 3"
                                    stroke={option.syntax}
                              />
                              <XAxis dataKey="Libellé" stroke={option.syntax} />
                              <YAxis type="number" stroke={option.syntax} />
                              <Tooltip
                                    cursor={false}
                                    content={
                                          mode === "absolute" ? (
                                                <CustomTooltip
                                                      type="Nombre"
                                                      value9={dataHosp[0].ho09}
                                                      value19={
                                                            dataHosp[0].ho1019
                                                      }
                                                      value29={
                                                            dataHosp[0].ho2029
                                                      }
                                                      value39={
                                                            dataHosp[0].ho3039
                                                      }
                                                      value49={
                                                            dataHosp[0].ho4049
                                                      }
                                                      value59={
                                                            dataHosp[0].ho5059
                                                      }
                                                      value69={
                                                            dataHosp[0].ho6069
                                                      }
                                                      value79={
                                                            dataHosp[0].ho7079
                                                      }
                                                      value89={
                                                            dataHosp[0].ho8089
                                                      }
                                                      value90={dataHosp[0].dc90}
                                                      total={dataHosp[0].ho}
                                                />
                                          ) : (
                                                <CustomTooltip
                                                      type="%"
                                                      value9={dataHosp[0].rel09}
                                                      value19={
                                                            dataHosp[0].rel1019
                                                      }
                                                      value29={
                                                            dataHosp[0].rel2029
                                                      }
                                                      value39={
                                                            dataHosp[0].rel3039
                                                      }
                                                      value49={
                                                            dataHosp[0].rel4049
                                                      }
                                                      value59={
                                                            dataHosp[0].rel5059
                                                      }
                                                      value69={
                                                            dataHosp[0].rel6069
                                                      }
                                                      value79={
                                                            dataHosp[0].rel7079
                                                      }
                                                      value89={
                                                            dataHosp[0].rel8089
                                                      }
                                                      value90={
                                                            dataHosp[0].rel09
                                                      }
                                                      total=""
                                                />
                                          )
                                    }
                                    wrapperStyle={{
                                          width: 250,
                                          color: option.syntax,
                                          backgroundColor: option.bgClear,
                                    }}
                                    // allowEscapeViewBox={{ x: true, y: true }}
                                    animationDuration={2000}
                                    animationEasing="ease-in-out"
                              />

                              <Bar
                                    dataKey={
                                          mode === "absolute" ? "dc09" : "rel09"
                                    }
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                              <Bar
                                    dataKey={
                                          mode === "absolute"
                                                ? "ho1019"
                                                : "rel1019"
                                    }
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                              <Bar
                                    dataKey={
                                          mode === "absolute"
                                                ? "ho2029"
                                                : "rel2029"
                                    }
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                              <Bar
                                    dataKey={
                                          mode === "absolute"
                                                ? "ho3039"
                                                : "rel3039"
                                    }
                                    // dataKey="dc3039"
                                    // dataKey="rel3039"
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                              <Bar
                                    dataKey={
                                          mode === "absolute"
                                                ? "ho4049"
                                                : "rel4049"
                                    }
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                              <Bar
                                    dataKey={
                                          mode === "absolute"
                                                ? "ho5059"
                                                : "rel5059"
                                    }
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                              <Bar
                                    dataKey={
                                          mode === "absolute"
                                                ? "ho6069"
                                                : "rel6069"
                                    }
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                              <Bar
                                    dataKey={
                                          mode === "absolute"
                                                ? "ho7079"
                                                : "rel7079"
                                    }
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                              <Bar
                                    dataKey={
                                          mode === "absolute"
                                                ? "ho8089"
                                                : "rel8089"
                                    }
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                              <Bar
                                    dataKey={
                                          mode === "absolute" ? "ho90" : "rel90"
                                    }
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                        </BarChart>
                  </div>
                  <div className="fl-col center">
                        <p
                              style={{
                                    color: option.syntax,
                                    fontWeight: "bold",
                              }}
                        >
                              Patients en réanimation
                        </p>
                        <BarChart
                              width={800}
                              height={580}
                              data={dataRea}
                              margin={{
                                    top: 25,
                                    // right: 5,
                                    bottom: 25,
                                    left: 125,
                              }}
                        >
                              <CartesianGrid
                                    strokeDasharray="3 3"
                                    stroke={option.syntax}
                              />
                              <XAxis dataKey="Libellé" stroke={option.syntax} />
                              <YAxis type="number" stroke={option.syntax} />
                              <Tooltip
                                    cursor={false}
                                    content={
                                          mode === "absolute" ? (
                                                <CustomTooltip
                                                      type="Nombre"
                                                      value9={dataRea[0].rea09}
                                                      value19={
                                                            dataRea[0].rea1019
                                                      }
                                                      value29={
                                                            dataRea[0].rea2029
                                                      }
                                                      value39={
                                                            dataRea[0].rea3039
                                                      }
                                                      value49={
                                                            dataRea[0].rea4049
                                                      }
                                                      value59={
                                                            dataRea[0].rea5059
                                                      }
                                                      value69={
                                                            dataRea[0].rea6069
                                                      }
                                                      value79={
                                                            dataRea[0].rea7079
                                                      }
                                                      value89={
                                                            dataRea[0].rea8089
                                                      }
                                                      value90={dataRea[0].rea90}
                                                      total={dataRea[0].rea}
                                                />
                                          ) : (
                                                <CustomTooltip
                                                      type="%"
                                                      value9={dataRea[0].rel09}
                                                      value19={
                                                            dataRea[0].rel1019
                                                      }
                                                      value29={
                                                            dataRea[0].rel2029
                                                      }
                                                      value39={
                                                            dataRea[0].rel3039
                                                      }
                                                      value49={
                                                            dataRea[0].rel4049
                                                      }
                                                      value59={
                                                            dataRea[0].rel5059
                                                      }
                                                      value69={
                                                            dataRea[0].rel6069
                                                      }
                                                      value79={
                                                            dataRea[0].rel7079
                                                      }
                                                      value89={
                                                            dataRea[0].rel8089
                                                      }
                                                      value90={dataRea[0].rel90}
                                                      total=""
                                                />
                                          )
                                    }
                                    wrapperStyle={{
                                          width: 250,
                                          color: option.syntax,
                                          backgroundColor: option.bgClear,
                                    }}
                                    // allowEscapeViewBox={{ x: true, y: true }}
                                    animationDuration={2000}
                                    animationEasing="ease-in-out"
                              />

                              <Bar
                                    dataKey={
                                          mode === "absolute"
                                                ? "rea09"
                                                : "rel09"
                                    }
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                              <Bar
                                    dataKey={
                                          mode === "absolute"
                                                ? "rea1019"
                                                : "rel1019"
                                    }
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                              <Bar
                                    dataKey={
                                          mode === "absolute"
                                                ? "rea2029"
                                                : "rel2029"
                                    }
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                              <Bar
                                    dataKey={
                                          mode === "absolute"
                                                ? "rea3039"
                                                : "rel3039"
                                    }
                                    // dataKey="dc3039"
                                    // dataKey="rel3039"
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                              <Bar
                                    dataKey={
                                          mode === "absolute"
                                                ? "rea4049"
                                                : "rel4049"
                                    }
                                    // dataKey="rel4049"
                                    // dataKey="dc4049"
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                              <Bar
                                    dataKey={
                                          mode === "absolute"
                                                ? "rea5059"
                                                : "rel5059"
                                    }
                                    // dataKey="rel5059"
                                    // dataKey="dc5059"
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                              <Bar
                                    dataKey={
                                          mode === "absolute"
                                                ? "rea6069"
                                                : "rel6069"
                                    }
                                    // dataKey="dc6069"
                                    // dataKey="rel6069"
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                              <Bar
                                    dataKey={
                                          mode === "absolute"
                                                ? "rea7079"
                                                : "rel7079"
                                    }
                                    // dataKey="rel7079"
                                    // dataKey="dc7079"
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                              <Bar
                                    dataKey={
                                          mode === "absolute"
                                                ? "rea8089"
                                                : "rel8089"
                                    }
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                              <Bar
                                    dataKey={
                                          mode === "absolute"
                                                ? "rea90"
                                                : "rel90"
                                    }
                                    fill={option.syntax}
                                    label={{
                                          position: "top",
                                          fill: "#A02519",
                                          fontWeight: "bold",
                                    }}
                              />
                        </BarChart>
                  </div>
            </div>
      );
}
