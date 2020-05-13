import React, { useState, useContext } from "react";

import { ThemeContext } from "../../../context/ThemeContext";

// React-vis
import {
      XYPlot,
      XAxis,
      YAxis,
      Crosshair,
      Hint,
      DiscreteColorLegend,
      VerticalGridLines,
      HorizontalGridLines,
      VerticalBarSeries,
      VerticalBarSeriesCanvas,
      LineSeries,
      LabelSeries,
} from "react-vis";
import "../../../../node_modules/react-vis/dist/style.css";

import "../../../App.css";
import "./style.css";

import data from "../../../assets/data/COVID/COVIDNewCase1205.json";
import dataNat from "../../../assets/data/COVID/COVIDNewCaseNatio1205.json";

export default function LineSeriesNewCase() {
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

      const [hintValue, setHintValue] = useState(null);
      const [crossHairValues, setCrossHairValues] = useState(null);
      // console.log(hintValue);
      // console.log(crossHairValues);

      // national data treatment
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

      const [depSelected, setDepSelected] = useState(1);
      console.log(depSelected);
      console.log(typeof depSelected);

      // Data treatment for each department
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

      const [crossHairDepValues, setCrossHairDepValues] = useState(null);

      return (
            <div>
                  <h5 style={{ color: option.syntax, fontSize: "18px" }}>
                        Nouveaux cas quotidiens depuis le 19 mars
                  </h5>
                  <h5 style={{ color: option.syntax }}>
                        Ensemble du territoire
                  </h5>
                  <XYPlot
                        className="lineChart"
                        height={400}
                        width={1000}
                        xType="ordinal"
                        // stroke="red"
                        colorType="linear"
                        // colorType="category"
                        // colorDomain={[0, 1, 2, 3]}
                        // colorRange={["black", "red", "blue", "green"]}
                        margin={{ bottom: 70, left: 50 }}
                        onMouseLeave={() => {
                              setHintValue(null);
                              setCrossHairValues(null);
                        }}
                  >
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis tickLabelAngle={-45} />
                        <YAxis />
                        <LineSeries
                              // data={dataDCToDisplay}
                              data={dataToDisplay[0]}
                              strokeWidth={6}
                              color="red"
                              // onSeriesClick={}
                              // onSeriesMouseOver={}
                              // onNearestX={(value, { event, innerX, index }) => {
                              //       setHintValue({
                              //             x: value.x,
                              //             y: value.y,
                              //       });
                              // }}
                              onNearestX={(value, { index }) => {
                                    setCrossHairValues(
                                          dataToDisplay.map((d) => d[index])
                                    );
                              }}
                        />
                        <LineSeries
                              // data={dataHToDisplay}
                              data={dataToDisplay[1]}

                              // color={2}
                        />
                        <LineSeries
                              // data={dataRToDisplay}
                              data={dataToDisplay[2]}

                              // color={0}
                        />
                        <LineSeries
                              // data={dataRDToDisplay}
                              data={dataToDisplay[3]}

                              // color={3}
                        />
                        {hintValue ? (
                              <Hint
                                    className="rv-hint__content"
                                    value={hintValue}
                                    align={
                                          // { horizontal: "auto", vertical: "auto" }
                                          {
                                                vertical: "top",
                                                horizontal: "left",
                                          }
                                    }
                              >
                                    {`${hintValue.y} décès`}
                              </Hint>
                        ) : null}
                        {crossHairValues ? (
                              <Crosshair values={crossHairValues}>
                                    <div className="rv-hint__content">
                                          <p style={{ fontWeight: "bold" }}>
                                                {crossHairValues[0].x}
                                          </p>
                                          <p>Décès: {crossHairValues[0].y}</p>
                                          <p>
                                                Hospitalisation:{" "}
                                                {crossHairValues[1].y}
                                          </p>
                                          <p>
                                                Réanimation:{" "}
                                                {crossHairValues[2].y}
                                          </p>
                                          <p>
                                                Retour à domicile:{" "}
                                                {crossHairValues[3].y}
                                          </p>
                                    </div>
                              </Crosshair>
                        ) : null}

                        <DiscreteColorLegend
                              style={{
                                    position: "absolute",
                                    left: "580px",
                                    top: "400px",
                                    fontWeight: "bold",
                                    color: option.syntax,
                              }}
                              orientation="horizontal"
                              items={[
                                    {
                                          title: "Hospitalisation",
                                          color: "#7AC7E3",
                                          strokeWidth: 3,
                                    },
                                    {
                                          title: "Retour à domicile",
                                          color: "#FB9833",
                                          strokeWidth: 3,
                                    },

                                    {
                                          title: "Réanimation",
                                          color: "#1A3177",
                                          strokeWidth: 3,
                                    },
                                    {
                                          title: "Décès",

                                          color: "red",
                                          strokeWidth: 3,
                                    },
                              ]}
                        />
                  </XYPlot>
                  <div>
                        <select
                              className="select"
                              style={{ width: "140px" }}
                              onChange={(event) => {
                                    setDepSelected(Number(event.target.value));
                              }}
                        >
                              {options}
                        </select>

                        <XYPlot
                              className="lineChart"
                              height={400}
                              width={1000}
                              xType="ordinal"
                              // stroke="red"
                              colorType="linear"
                              // colorType="category"
                              // colorDomain={[0, 1, 2, 3]}
                              // colorRange={["black", "red", "blue", "green"]}
                              margin={{ bottom: 70, left: 50 }}
                              onMouseLeave={() => {
                                    setCrossHairDepValues(null);
                              }}
                        >
                              <VerticalGridLines />
                              <HorizontalGridLines />
                              <XAxis tickLabelAngle={-45} />
                              <YAxis />

                              <LineSeries
                                    data={dataDepToDisplay[0]}
                                    strokeWidth={6}
                                    color="red"
                                    onNearestX={(value, { index }) => {
                                          setCrossHairDepValues(
                                                dataDepToDisplay.map(
                                                      (d) => d[index]
                                                )
                                          );
                                    }}
                              />
                              <LineSeries data={dataDepToDisplay[1]} />
                              <LineSeries data={dataDepToDisplay[2]} />
                              <LineSeries data={dataDepToDisplay[3]} />
                              {crossHairDepValues ? (
                                    <Crosshair values={crossHairDepValues}>
                                          <div className="rv-hint__content">
                                                <p
                                                      style={{
                                                            fontWeight: "bold",
                                                      }}
                                                >
                                                      {crossHairDepValues[0].x}
                                                </p>
                                                <p>
                                                      Décès:{" "}
                                                      {crossHairDepValues[0].y}
                                                </p>
                                                <p>
                                                      Hospitalisation:{" "}
                                                      {crossHairDepValues[1].y}
                                                </p>
                                                <p>
                                                      Réanimation:{" "}
                                                      {crossHairDepValues[2].y}
                                                </p>
                                                <p>
                                                      Retour à domicile:{" "}
                                                      {crossHairDepValues[3].y}
                                                </p>
                                          </div>
                                    </Crosshair>
                              ) : null}
                        </XYPlot>
                  </div>
            </div>
      );
}
