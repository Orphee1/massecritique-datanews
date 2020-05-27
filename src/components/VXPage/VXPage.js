import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { DataContext } from "../../context/DataContext";

import "../../App.css";
import "./style.css";

import useWindowDimension from "../../assets/useWindowDimension";

// Component import
import VXLinepath from "../VXTools/VXLinepath";
import VXBarStackHorizon from "../VXTools/VXBarStackHorizon";
import VXArea from "../VXTools/VXArea";

const optionDepts = [
      ["Ain", 1],
      ["Aisne", 2],
      ["Allier", 3],
      ["Alpes-de-Haute-Provence", 4],
      ["Hautes-Alpes", 5],
      ["Alpes-Maritimes", 6],
      ["Ardèche", 7],
      ["Ardennes", 8],
      ["Ariège", 9],
      ["Aube", 10],
      ["Aude", 11],
      ["Aveyron", 12],
      ["Bouches-du-Rhône", 13],
      ["Calvados", 14],
      ["Cantal", 15],
      ["Charente", 16],
      ["Charente-Maritime", 17],
      ["Cher", 18],
      ["Corrèze", 19],
      ["Côte-d'Or", 21],
      ["Côtes-d'Armor", 22],
      ["Creuse", 23],
      ["Dordogne", 24],
      ["Doubs", 25],
      ["Drôme", 26],
      ["Eure", 27],
      ["Eure-et-Loire", 28],
      ["Finistère", 29],
      ["Corse-du-Sud", "2A"],
      ["Haute-Corse", "2B"],
      ["Gard", 30],
      ["Haute-Garonne", 31],
      ["Gers", 32],
      ["Gironde", 33],
      ["Hérault", 34],
      ["Ille-et-Vilaine", 35],
      ["Indre", 36],
      ["Indre-et-Loire", 37],
      ["Isère", 38],
      ["Jura", 39],
      ["Landes", 40],
      ["Loir-et-Cher", 41],
      ["Loire", 42],
      ["Haute-Loire", 43],
      ["Loire-Atlantique", 44],
      ["Loiret", 45],
      ["Lot", 46],
      ["Lot-et-Garonne", 47],
      ["Lozère", 48],
      ["Maine-et-Loire", 49],
      ["Manche", 50],
      ["Marne", 51],
      ["Haute-Marne", 52],
      ["Mayenne", 53],
      ["Meurthe-et-Moselle", 54],
      ["Meuse", 55],
      ["Morbihan", 56],
      ["Moselle", 57],
      ["Nièvre", 58],
      ["Nord", 59],
      ["Oise", 60],
      ["Orne", 61],
      ["Pas-de-Calais", 62],
      ["Puy-de-Dôme", 63],
      ["Pyrénées-Atlantiques", 64],
      ["Hautes-Pyrénées", 65],
      ["Pyrénées-Orientales", 66],

      ["Bas-Rhin", 67],
      ["Haut-Rhin", 68],
      ["Rhône", 69],
      ["Haute-Saône", 70],
      ["Saône-et-Loire", 71],
      ["Sarthe", 72],
      ["Savoie", 73],
      ["Haute-Savoie", 74],
      ["Paris", 75],
      ["Seine-Maritime", 76],
      ["Seine-et-Marne", 77],
      ["Yvelines", 78],
      ["Deux-Sèvres", 79],
      ["Somme", 80],
      ["Tarn", 81],
      ["Tarn-et-Garonne", 82],
      ["Var", 83],
      ["Vaucluse", 84],
      ["Vendée", 85],
      ["Vienne", 86],
      ["Haute-Vienne", 87],
      ["Vosges", 88],
      ["Yonne", 89],
      ["Territoire de Belfort", 90],
      ["Essonne", 91],
      ["Haut-de-Seine", 92],
      ["Seine-Saint-Denis", 93],
      ["Val-de-Marne", 94],
      ["Val d'Oise", 95],
      ["Guadeloupe", 971],
      ["Martinique", 972],
      ["Guyane", 973],
      ["La Réunion", 974],
      ["Mayotte", 975],
];

const options = [];
for (let i = 0; i < optionDepts.length; i++) {
      options.push(
            <option key={i} value={optionDepts[i][1]}>
                  {optionDepts[i][0]}
            </option>
      );
}

export default function VXPage() {
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
      const { width } = useWindowDimension();
      // const widthGraph = width * 0.8;

      // Data import from the context
      const [datas] = useContext(DataContext);

      const data = datas[1][0];
      const dataNat = datas[1][1];
      const dataUpdated = datas[1][2];
      const dataUSA = datas[1][3];
      const dataFRA = datas[1][4];
      const dataSPA = datas[1][5];
      const dataGER = datas[1][6];
      const dataGBR = datas[1][7];

      // national data treatment
      let dataRDToDisplay = [];
      let dataRToDisplay = [];
      let dataHToDisplay = [];
      let dataDCToDisplay = [];
      for (let i = 0; i < dataNat.length; i++) {
            dataDCToDisplay.push({
                  date: Date.parse(dataNat[i].jour),
                  value: dataNat[i].incid_dc,
            });
            dataHToDisplay.push({
                  date: Date.parse(dataNat[i].jour),
                  value: dataNat[i].incid_hosp,
            });
            dataRToDisplay.push({
                  date: Date.parse(dataNat[i].jour),
                  value: dataNat[i].incid_rea,
            });
            dataRDToDisplay.push({
                  date: Date.parse(dataNat[i].jour),
                  value: dataNat[i].incid_rad,
            });
      }
      let dataToDisplay = [
            dataDCToDisplay,
            dataHToDisplay,
            dataRToDisplay,
            dataRDToDisplay,
      ];
      const [depSelected, setDepSelected] = useState(1);
      // console.log(depSelected);
      // Data treatment for each department
      let dataDepRD = [];
      let dataDepH = [];
      let dataDepR = [];
      let dataDepDC = [];
      for (let i = 0; i < data.length; i++) {
            if (data[i].dep === depSelected) {
                  dataDepDC.push({
                        date: Date.parse(data[i].jour),
                        value: data[i].incid_dc,
                  });
                  dataDepH.push({
                        date: Date.parse(data[i].jour),
                        value: data[i].incid_hosp,
                  });
                  dataDepR.push({
                        date: Date.parse(data[i].jour),
                        value: data[i].incid_rea,
                  });
                  dataDepRD.push({
                        date: Date.parse(data[i].jour),
                        value: data[i].incid_rad,
                  });
            }
      }

      let dataDepToDisplay = [dataDepDC, dataDepH, dataDepR, dataDepRD];
      const [type, setType] = useState("hosp");

      return (
            <div>
                  <div className="data-vx-flex1">
                        <h5
                              style={{
                                    color: option.syntax,
                                    fontSize: "18px",
                              }}
                        >
                              Evolution du nombre de décès
                        </h5>
                        <h5
                              style={{
                                    color: option.syntax,
                                    // fontSize: "16px",
                              }}
                        >
                              Source :{" "}
                              <a
                                    style={{
                                          color: option.syntax,
                                          // fontSize: "18px",
                                    }}
                                    href="https://ourworldindata.org/covid-deaths"
                              >
                                    Our World in Data
                              </a>
                        </h5>

                        <VXArea dataArea={dataFRA} title="France" />

                        <VXArea dataArea={dataSPA} title="Espagne" />

                        <VXArea dataArea={dataGER} title="Allemagne" />

                        <VXArea dataArea={dataGBR} title="Royaume-Uni" />

                        <VXArea dataArea={dataUSA} title="Etats-Unis" />
                  </div>
                  <div className="data-vx-flex1 ">
                        <h5
                              style={{
                                    color: option.syntax,
                                    fontSize: "18px",
                              }}
                        >
                              Nouveaux cas quotidiens depuis le 19 mars
                        </h5>
                        <h5 style={{ color: option.syntax }}>
                              Ensemble du territoire
                        </h5>
                        <VXLinepath data={dataToDisplay} />
                        <select
                              className="select"
                              style={{ width: "140px" }}
                              onChange={(event) => {
                                    setDepSelected(Number(event.target.value));
                              }}
                        >
                              {options}
                        </select>
                        <VXLinepath data={dataDepToDisplay} />
                  </div>
                  <div className="data-vx-flex3 remove568 ">
                        <h5 style={{ color: option.syntax, fontSize: "18px" }}>
                              Impact de l'épidémie selon le sexe
                        </h5>
                        <select
                              className="select"
                              style={{ width: "150px", marginBottom: "10px" }}
                              onChange={(event) => {
                                    setType(event.target.value);
                              }}
                        >
                              <option value="hosp">
                                    Patients hospitalsées
                              </option>
                              <option value="rea">
                                    Patients en réanimation
                              </option>
                              <option value="dec">Patients décédés</option>
                        </select>
                        <VXBarStackHorizon data={dataUpdated} />
                  </div>
            </div>
      );
}
