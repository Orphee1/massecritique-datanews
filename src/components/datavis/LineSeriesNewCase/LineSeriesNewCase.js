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
      // console.log(hintValue);
      return (
            <div>
                  <XYPlot
                        height={400}
                        width={1000}
                        xType="ordinal"
                        // stroke="red"
                        colorType="linear"
                        // colorType="category"
                        colorDomain={[0, 1, 2]}
                        colorRange={["black", "red", "blue"]}
                        margin={{ bottom: 70 }}
                        onMouseLeave={() => setHintValue(null)}
                  >
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis tickLabelAngle={-45} />
                        <YAxis />
                        <LineSeries
                              data={dataDCToDisplay}
                              // color="red"
                              color={0}
                              // onSeriesClick={}
                              // onSeriesMouseOver={}
                              onNearestX={(value, { event, innerX, index }) => {
                                    setHintValue({
                                          x: value.x,
                                          y: value.y,
                                    });
                              }}
                        />
                        <LineSeries
                              data={dataHToDisplay}
                              // color="red"
                              color={0}

                              // onNearestX={(value, { event, innerX, index }) => {
                              //       setHintValue({
                              //             x: value.x,
                              //             y: value.y,
                              //       });
                              // }}
                        />
                        <LineSeries
                              data={dataRToDisplay}
                              // color="red"
                              color={0}

                              // onNearestX={(value, { event, innerX, index }) => {
                              //       setHintValue({
                              //             x: value.x,
                              //             y: value.y,
                              //       });
                              // }}
                        />
                        <LineSeries
                              data={dataRDToDisplay}
                              // color="red"
                              color={0}

                              // onNearestX={(value, { event, innerX, index }) => {
                              //       setHintValue({
                              //             x: value.x,
                              //             y: value.y,
                              //       });
                              // }}
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
                  </XYPlot>
            </div>
      );
}
