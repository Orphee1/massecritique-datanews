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

let dataDCToDisplay = [];

for (let i = 0; i < dataNat.length; i++) {
      dataDCToDisplay.push({
            x: dataNat[i].jour,
            y: dataNat[i].incid_dc,
      });
}

let dataHToDisplay = [];

for (let i = 0; i < dataNat.length; i++) {
      dataHToDisplay.push({
            x: dataNat[i].jour,
            y: dataNat[i].incid_hosp,
      });
}
// console.log(dataHToDisplay);

let dataRToDisplay = [];

for (let i = 0; i < dataNat.length; i++) {
      dataRToDisplay.push({
            x: dataNat[i].jour,
            y: dataNat[i].incid_rea,
      });
}

let dataRDToDisplay = [];

for (let i = 0; i < dataNat.length; i++) {
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
      console.log(crossHairValues);
      return (
            <div>
                  <h5 style={{ color: option.syntax, fontSize: "18px" }}>
                        Nouveaux cas quotidiens depuis le 19 mars
                  </h5>
                  <XYPlot
                        className="lineChart"
                        height={400}
                        width={1000}
                        xType="ordinal"
                        // stroke="red"
                        colorType="linear"
                        // colorType="category"
                        colorDomain={[0, 1, 2, 3]}
                        colorRange={["black", "red", "blue", "green"]}
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
                              // color="red"
                              color={1}
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
                              // color="red"
                              color={2}
                        />
                        <LineSeries
                              // data={dataRToDisplay}
                              data={dataToDisplay[2]}
                              // color="red"
                              color={0}
                        />
                        <LineSeries
                              // data={dataRDToDisplay}
                              data={dataToDisplay[3]}
                              // color="red"
                              color={3}
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
                                    left: "620px",
                                    top: "10px",
                                    fontWeight: "bold",
                                    color: option.syntax,
                              }}
                              orientation="vertical"
                              items={[
                                    {
                                          title: "Hospitalisation",
                                          color: "blue",
                                          strokeWidth: 4,
                                    },
                                    {
                                          title: "Décès",

                                          color: "red",
                                          strokeWidth: 4,
                                    },

                                    {
                                          title: "Réanimation",
                                          color: "black",
                                          strokeWidth: 4,
                                    },
                                    {
                                          title: "Retour à domicile",
                                          color: "green",
                                          strokeWidth: 4,
                                    },
                              ]}
                        />
                  </XYPlot>
            </div>
      );
}
