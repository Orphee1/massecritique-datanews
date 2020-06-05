import React, { useState, useContext } from "react";

import { ThemeContext } from "../../../context/ThemeContext";

// React-vis
import {
      XYPlot,
      XAxis,
      YAxis,
      DiscreteColorLegend,
      VerticalGridLines,
      HorizontalGridLines,
      VerticalBarSeries,
      LabelSeries,
} from "react-vis";

import "../../../../node_modules/react-vis/dist/style.css";

import "../../../App.css";
import "./style.css";

const optionDepts = [
      "Ain",
      "Aisne",
      "Allier",
      "Alpes-de-Haute-Provence",
      "Hautes-Alpes",
      "Alpes-Maritimes",
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

export default function ReactVisChart({ data }) {
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
            default:
                  console.log("default");
      }

      const [depSelected, setDepSelected] = useState("Ain");
      // console.log(depSelected);

      let menData = [];
      let womenData = [];
      for (let i = 0; i < data.length; i++) {
            if (data[i].dep === depSelected) {
                  menData.push(
                        {
                              x: "hospitalisation",
                              y: data[i].hosph,
                        },
                        { x: "reanimation", y: data[i].reah },
                        { x: "décès", y: data[i].deadh }
                  );
                  womenData.push(
                        {
                              x: "hospitalisation",
                              y: data[i].hospf,
                        },
                        { x: "reanimation", y: data[i].reaf },
                        { x: "décès", y: data[i].deadf }
                  );
                  // console.log(menData);
                  // console.log(womenData);
            }
      }

      return (
            <div>
                  <div className="fl-col">
                        <div className="select-info">
                              <h5
                                    style={{
                                          color: option.syntax,
                                    }}
                              >
                                    Afficher les données par département:
                              </h5>
                              <select
                                    className="select"
                                    style={{
                                          width: "165px",
                                          marginBottom: "20px",
                                    }}
                                    onChange={(event) => {
                                          setDepSelected(event.target.value);
                                    }}
                              >
                                    {options}
                              </select>
                        </div>

                        <XYPlot
                              xType="ordinal"
                              width={300}
                              height={300}
                              // xDistance={100}
                              margin={{ left: 155, bottom: 70 }}
                        >
                              <VerticalGridLines />
                              <HorizontalGridLines />
                              <XAxis
                                    // style={{
                                    //       ticks: { fill: option.syntax },
                                    // }}
                                    tickLabelAngle={-45}
                                    // width={300}
                              />
                              <YAxis
                              // style={{
                              //       ticks: { fill: option.syntax },
                              // }}
                              />

                              <VerticalBarSeries
                                    className="vertical-bar-series-example"
                                    data={menData}
                              />
                              <VerticalBarSeries
                                    data={womenData}
                                    barWidth={0.9}
                              />
                              <LabelSeries
                                    // data={menData}
                                    data={womenData}
                                    getLabel={(d) => d.y}
                                    style={{ fontWeight: "900" }}
                              />
                              <LabelSeries
                                    // data={menData}
                                    data={menData}
                                    getLabel={(d) => d.y}
                                    style={{ fontWeight: "900" }}
                              />
                              <DiscreteColorLegend
                                    style={{
                                          position: "absolute",
                                          left: "420px",
                                          top: "10px",
                                          fontWeight: "bold",
                                    }}
                                    orientation="vertical"
                                    items={[
                                          {
                                                title: "Hommes",
                                                color: "#1F939A",
                                                strokeWidth: 4,
                                          },
                                          {
                                                title: "Femmmes",
                                                color: "#79C7E3",
                                                strokeWidth: 4,
                                          },
                                    ]}
                              />
                        </XYPlot>
                  </div>
            </div>
      );
}
