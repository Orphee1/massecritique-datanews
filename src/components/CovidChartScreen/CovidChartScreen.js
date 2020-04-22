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

const optionDepts = [
      "Sélectionner un département",
      "Ain",
      "Aisne",
      "Allier",
      "Alpes-de-Haute-Provence",
      "Hautes-Alpes",
      "Alpes-Maritime",
      "Ardèche",
      "Ardennes",
      "Ariège",
      "Aube",
      "Aude",
      "Aveyron",
      "Bouches-du-Rhône",
      "Calvados",
      "Cantal",
      "Charente",
      "Charente-Maritime",
      "Cher",
      "Corrèze",
      "Côte-d'Or",
      "Côtes-d'Armor",
      "Creuse",
      "Dordogne",
      "Doubs",
      "Drôme",
      "Eure",
      "Eure-et-Loire",
      "Finistère",
      "Corse-du-Sud",
      "Haute-Corse",
      "Gard",
      "Haute-Garonne",
      "Gers",
      "Gironde",
      "Hérault",
      "Ille-et-Vilaine",
      "Indre",
      "Indre-et-Loire",
      "Isère",
      "Jura",
      "Landes",
      "Loir-et-Cher",
      "Loire",
      "Haute-Loire",
      "Loire-Atlantique",
      "Loiret",
      "Lot",
      "Lot-et-Garonne",
      "Lozère",
      "Maine-et-Loire",
      "Manche",
      "Marne",
      "Haute-Marne",
      "Mayenne",
      "Meurthe-et-Moselle",
      "Meuse",
      "Morbihan",
      "Moselle",
      "Nièvre",
      "Nord",
      "Oise",
      "Orne",
      "Pas-de-Calais",
      "Puy-de-Dôme",
      "Pyrénées-Atlantiques",
      "Hautes-Pyrénées",
      "Pyrénées-Orientales",
      "Pyrénées-Orientales",
      "Bas-Rhin",
      "Haut-Rhin",
      "Rhône",
      "Haute-Saône",
      "Saône-et-Loire",
      "Sarthe",
      "Savoie",
      "Haute-Savoie",
      "Paris",
      "Seine-Maritime",
      "Seine-et-Marne",
      "Yvelines",
      "Deux-Sèvres",
      "Somme",
      "Tarn",
      "Tarn-et-Garonne",
      "Var",
      "Vaucluse",
      "Vendée",
      "Vienne",
      "Haute-Vienne",
      "Vosges",
      "Yonne",
      "Territoire de Belfort",
      "Essonne",
      "Haut-de-Seine",
      "Seine-Saint-Denis",
      "Val-de-Marne",
      "Val d'Oise",
      "Guadeloupe",
      "Martinique",
      "Guyane",
      "La Réunion",
      "Mayotte",
];

const options = [];
for (let i = 0; i < optionDepts.length; i++) {
      options.push(
            <option key={i} value={optionDepts[i]}>
                  {optionDepts[i]}
            </option>
      );
}

export default function CovidChartScreen({ data }) {
      const { height } = useWindowDimensions();
      const [depSelected, setDepSelected] = useState("Ain");

      // Theme definition
      const [theme] = useContext(ThemeContext);
      let { isLigthTheme, light, dark } = theme;
      const option = isLigthTheme ? light : dark;

      // Data treatment

      let dataToDisplay = [];
      let hosph = 0;
      let hospf = 0;
      let deadh = 0;
      let deadf = 0;
      let reah = 0;
      let reaf = 0;

      if (depSelected !== undefined) {
            for (let i = 0; i < data.length; i++) {
                  if (data[i].dep === depSelected) {
                        dataToDisplay.push(data[i]);
                        hosph += data[i].hosph;
                        hospf += data[i].hospf;
                        deadh += data[i].deadh;
                        deadf += data[i].deadf;
                        reah += data[i].reah;
                        reaf += data[i].reaf;
                  }
            }
            console.log(dataToDisplay);
      }

      return (
            <div className="covid-chart" style={{ height: height * 0.8 }}>
                  <div className="d-flex s-a">
                        <select
                              className="dept-select"
                              onChange={(event) => {
                                    setDepSelected(event.target.value);
                              }}
                        >
                              {options}
                        </select>
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
                  </div>
                  <div className="d-flex">
                        <div className="fl-col">
                              <h3
                                    style={{
                                          color: option.syntax,
                                    }}
                              >
                                    {depSelected}
                              </h3>

                              <div className="info-chart">
                                    <div className="hosp">
                                          <p
                                                style={{
                                                      color: option.syntax,
                                                      fontWeight: "bold",
                                                }}
                                          >
                                                Patients hospitalisés
                                          </p>
                                          <div className="d-flex">
                                                <div
                                                      style={{
                                                            background:
                                                                  "#EC6554",
                                                            width: "10px",
                                                            height: "10px",
                                                      }}
                                                />
                                                <p
                                                      style={{
                                                            color:
                                                                  option.syntax,
                                                            marginLeft: "10px",
                                                      }}
                                                >
                                                      {hosph} hommes.
                                                </p>
                                          </div>

                                          <div className="d-flex">
                                                <div
                                                      style={{
                                                            background:
                                                                  "#D24738",
                                                            width: "10px",
                                                            height: "10px",
                                                      }}
                                                />
                                                <p
                                                      style={{
                                                            color:
                                                                  option.syntax,
                                                            marginLeft: "10px",
                                                      }}
                                                >
                                                      {hospf} femmes.
                                                </p>
                                          </div>
                                    </div>
                                    <div className="rea">
                                          <p
                                                style={{
                                                      color: option.syntax,
                                                      fontWeight: "bold",
                                                }}
                                          >
                                                En réanimation
                                          </p>
                                          <div className="d-flex">
                                                <div
                                                      style={{
                                                            background:
                                                                  "#BA3528",
                                                            width: "10px",
                                                            height: "10px",
                                                      }}
                                                />
                                                <p
                                                      style={{
                                                            color:
                                                                  option.syntax,
                                                            marginLeft: "10px",
                                                      }}
                                                >
                                                      {reah} hommes.
                                                </p>
                                          </div>
                                          <div className="d-flex">
                                                <div
                                                      style={{
                                                            background:
                                                                  "#A02519",
                                                            width: "10px",
                                                            height: "10px",
                                                      }}
                                                />
                                                <p
                                                      style={{
                                                            color:
                                                                  option.syntax,
                                                            marginLeft: "10px",
                                                      }}
                                                >
                                                      {reaf} femmes.
                                                </p>
                                          </div>
                                    </div>
                                    <div className="dead">
                                          <p
                                                style={{
                                                      color: option.syntax,
                                                      fontWeight: "bold",
                                                }}
                                          >
                                                Décès
                                          </p>
                                          <div className="d-flex">
                                                <div
                                                      style={{
                                                            background:
                                                                  "#8B2E31",
                                                            width: "10px",
                                                            height: "10px",
                                                      }}
                                                />
                                                <p
                                                      style={{
                                                            color:
                                                                  option.syntax,
                                                            marginLeft: "10px",
                                                      }}
                                                >
                                                      {deadh} hommes.
                                                </p>
                                          </div>
                                          <div className="d-flex">
                                                <div
                                                      style={{
                                                            background:
                                                                  "#792022",
                                                            width: "10px",
                                                            height: "10px",
                                                      }}
                                                />
                                                <p
                                                      style={{
                                                            color:
                                                                  option.syntax,
                                                            marginLeft: "10px",
                                                      }}
                                                >
                                                      {deadf} femmes.
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <div className="barchart-container">
                              {depSelected !== undefined && (
                                    <BarChart
                                          className="bar-chart"
                                          width={400}
                                          height={400}
                                          data={dataToDisplay}
                                          margin={{
                                                top: 5,
                                                right: 30,
                                                left: 20,
                                                bottom: 5,
                                          }}
                                    >
                                          <CartesianGrid
                                                strokeDasharray="3 3"
                                                stroke={option.syntax}
                                          />
                                          <XAxis
                                                dataKey="dep"
                                                stroke={option.syntax}
                                          />
                                          <YAxis
                                                stroke={option.syntax}
                                                type="number"
                                          />
                                          <Tooltip
                                                wrapperStyle={{
                                                      width: 100,
                                                      backgroundColor:
                                                            option.bgClear,
                                                }}
                                          />
                                          <Legend
                                                width={400}
                                                wrapperStyle={{
                                                      top: 330,
                                                      right: -30,
                                                      backgroundColor:
                                                            option.bgClear,
                                                      border: "3px solid",
                                                      borderColor:
                                                            option.syntax,
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
                                          <Bar
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
                                          />
                                    </BarChart>
                              )}
                        </div>
                  </div>
            </div>
      );
}
