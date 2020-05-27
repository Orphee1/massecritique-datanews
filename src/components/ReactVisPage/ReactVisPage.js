import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { DataContext } from "../../context/DataContext";

import "../../App.css";
import "./style.css";
import useWindowDimension from "../../assets/useWindowDimension";

// Components import
import COVIDAgeBar from "../ReactVisTools/COVIDageBar/COVIDageBar";
import LineSeriesNewCase from "../ReactVisTools/LineSeriesNewCase/LineSeriesNewCase";
import ReactVisChart from "../ReactVisTools/ReactVisChart/ReactVisChart";
import ReactVisChartAllDept from "../ReactVisTools/ReactVisChartAllDept";

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
      ["Territoire-de-Belfort", 90],
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

const optionsR = [];
for (let i = 0; i < optionReg.length; i++) {
      optionsR.push(
            <option key={i} value={optionReg[i]}>
                  {optionReg[i]}
            </option>
      );
}

export default function ReactVisPage() {
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
      const [depSelected, setDepSelected] = useState(1);
      // console.log(depSelected);
      const [regSelected, setRegSelected] = useState("Île-de-France");

      // Data import from the context
      const [datasReactVis] = useContext(DataContext);
      // console.log(datasReactVis);
      const data = datasReactVis[0];
      const dataNat = datasReactVis[1];
      const dataUpdated = datasReactVis[2]; // Required by ReactVisChartAllDept and ReactVisChart components
      const dead = datasReactVis[3]; // Required by firt CovidAgeBar component
      const hosp = datasReactVis[4]; // Required by second CovidAgeBar component
      const rea = datasReactVis[5]; // Required by third CovidAgeBar component

      // Data treatment
      // national data
      let dataRDToDisplay = [];
      let dataRToDisplay = [];
      let dataHToDisplay = [];
      let dataDCToDisplay = [];
      for (let i = 0; i < dataNat.length; i++) {
            dataDCToDisplay.push({
                  x: dataNat[i].jour,
                  y: dataNat[i].incid_dc,
            });
            dataHToDisplay.push({
                  x: dataNat[i].jour,
                  y: dataNat[i].incid_hosp,
            });
            dataRToDisplay.push({
                  x: dataNat[i].jour,
                  y: dataNat[i].incid_rea,
            });
            dataRDToDisplay.push({
                  x: dataNat[i].jour,
                  y: dataNat[i].incid_rad,
            });
      }
      let dataToDisplay = [
            dataDCToDisplay,
            dataHToDisplay,
            dataRToDisplay,
            dataRDToDisplay,
      ];
      // console.log(dataToDisplay);

      // data treatment for each department
      let dataDepRD = [];
      let dataDepH = [];
      let dataDepR = [];
      let dataDepDC = [];
      for (let i = 0; i < data.length; i++) {
            console.log("new loop");
            if (data[i].dep === depSelected) {
                  console.log("OK");
                  dataDepDC.push({
                        x: data[i].jour,
                        y: data[i].incid_dc,
                  });
                  dataDepH.push({
                        x: data[i].jour,
                        y: data[i].incid_hosp,
                  });
                  dataDepR.push({
                        x: data[i].jour,
                        y: data[i].incid_rea,
                  });
                  dataDepRD.push({
                        x: data[i].jour,
                        y: data[i].incid_rad,
                  });
            }
      }

      let dataDepToDisplay = [dataDepDC, dataDepH, dataDepR, dataDepRD];
      // console.log(dataDepToDisplay);

      // Data treatment for COVIDageBar component
      let dataDCATodisplay = [];
      for (let i = 0; i < dead.length; i++) {
            if (dead[i].Libellé === regSelected) {
                  dataDCATodisplay.push(
                        { x: "0-9 ans", y: dead[i].re09 },
                        { x: "10-19 ans", y: dead[i].rel1019 },
                        {
                              x: "20-29 ans",
                              y: dead[i].rel2029,
                        },
                        {
                              x: "30-39 ans",
                              y: dead[i].rel3039,
                        },
                        {
                              x: "40-49 ans",
                              y: dead[i].rel4049,
                        },
                        {
                              x: "50-59 ans",
                              y: dead[i].rel5059,
                        },
                        {
                              x: "60-69 ans",
                              y: dead[i].rel6069,
                        },
                        {
                              x: "70-79 ans",
                              y: dead[i].rel7079,
                        },
                        {
                              x: "80-89 ans",
                              y: dead[i].rel8089,
                        },
                        {
                              x: "Plus de 90 ans",
                              y: dead[i].rel90,
                        }
                  );
            }
      }
      // console.log(dataDCATodisplay);

      let dataHATodisplay = [];
      for (let i = 0; i < hosp.length; i++) {
            if (hosp[i].Libelle === regSelected) {
                  dataHATodisplay.push(
                        { x: "0-9 ans", y: hosp[i].rel09 },
                        { x: "10-19 ans", y: hosp[i].rel1019 },
                        {
                              x: "20-29 ans",
                              y: hosp[i].rel2029,
                        },
                        {
                              x: "30-39 ans",
                              y: hosp[i].rel3039,
                        },
                        {
                              x: "40-49 ans",
                              y: hosp[i].rel4049,
                        },
                        {
                              x: "50-59 ans",
                              y: hosp[i].rel5059,
                        },
                        {
                              x: "60-69 ans",
                              y: hosp[i].rel6069,
                        },
                        {
                              x: "70-79 ans",
                              y: hosp[i].rel7079,
                        },
                        {
                              x: "80-89 ans",
                              y: hosp[i].rel8089,
                        },
                        {
                              x: "Plus de 90 ans",
                              y: hosp[i].rel90,
                        }
                  );
            }
      }
      // console.log(dataHATodisplay);

      let dataRATodisplay = [];
      for (let i = 0; i < rea.length; i++) {
            if (rea[i].Libellé === regSelected) {
                  dataRATodisplay.push(
                        { x: "0-9 ans", y: rea[i].rea09 },
                        { x: "10-19 ans", y: rea[i].rel1019 },
                        {
                              x: "20-29 ans",
                              y: rea[i].rel2029,
                        },
                        {
                              x: "30-39 ans",
                              y: rea[i].rel3039,
                        },
                        {
                              x: "40-49 ans",
                              y: rea[i].rel4049,
                        },
                        {
                              x: "50-59 ans",
                              y: rea[i].rel5059,
                        },
                        {
                              x: "60-69 ans",
                              y: rea[i].rel6069,
                        },
                        {
                              x: "70-79 ans",
                              y: rea[i].rel7079,
                        },
                        {
                              x: "80-89 ans",
                              y: rea[i].rel8089,
                        },
                        {
                              x: "Plus de 90 ans",
                              y: rea[i].rel90,
                        }
                  );
            }
      }
      // console.log(dataRATodisplay);

      // States required by crossHair component's tool
      const [crossHairValues, setCrossHairValues] = useState(null);
      const [crossHairDepValues, setCrossHairDepValues] = useState(null);

      return (
            <div className="">
                  <div className="reactVis-flex1 remove414">
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
                        <LineSeriesNewCase
                              data={dataToDisplay}
                              crossHairValues={crossHairValues}
                              setCrossHairValues={setCrossHairValues}
                        />
                  </div>
                  <div className="reactVis-flex1 remove414">
                        <select
                              className="select"
                              style={{ width: "140px" }}
                              onChange={(event) => {
                                    setDepSelected(Number(event.target.value));
                              }}
                        >
                              {options}
                        </select>
                        <LineSeriesNewCase
                              data={dataDepToDisplay}
                              crossHairValues={crossHairDepValues}
                              setCrossHairValues={setCrossHairDepValues}
                        />
                  </div>
                  <div
                        className="reactVis-flex3"
                        style={{
                              marginBottom: "20px",
                        }}
                  >
                        <h5 style={{ color: option.syntax, fontSize: "18px" }}>
                              Impact de l'épidémie selon le sexe
                        </h5>
                        <ReactVisChartAllDept data={dataUpdated} />
                  </div>
                  <div
                        className="reactVis-flex4"
                        style={{
                              marginBottom: "20px",
                        }}
                  >
                        <ReactVisChart data={dataUpdated} />
                  </div>
                  <div
                        className="reactVis-flex5"
                        style={{
                              marginBottom: "20px",
                        }}
                  >
                        <h5
                              style={{
                                    color: option.syntax,
                                    fontSize: "18px",
                              }}
                        >
                              Impact de l'épidémie selon l'âge
                        </h5>
                        <div className="select-info">
                              <h5
                                    style={{
                                          color: option.syntax,
                                    }}
                              >
                                    Afficher les données par région:
                              </h5>
                              <select
                                    className="select"
                                    style={{
                                          width: "165px",
                                          marginBottom: "20px",
                                    }}
                                    onChange={(event) => {
                                          setRegSelected(event.target.value);
                                    }}
                              >
                                    {optionsR}
                              </select>
                        </div>
                        <div className="chart-age-container">
                              <div className="chart-age-box">
                                    <COVIDAgeBar
                                          data={dataDCATodisplay}
                                          type="Décès"
                                    />
                              </div>
                              <div className="chart-age-box">
                                    <COVIDAgeBar
                                          data={dataHATodisplay}
                                          type="Patients hospitalisés"
                                    />
                              </div>
                              <div className="chart-age-box">
                                    <COVIDAgeBar
                                          data={dataRATodisplay}
                                          type="Patients en réanimation"
                                    />
                              </div>
                        </div>
                  </div>
            </div>
      );
}
