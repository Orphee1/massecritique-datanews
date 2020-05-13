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

const hintStyle = {
      fontSize: 14,
      color: "white",
      background: "#3A3A48",
      // width: "100%"
      width: "80px",
      height: "20px",
      borderRadius: "5px",
};

let dataToDisplay = [];
for (let i = 0; i < data.length; i++) {
      if (data[i].dep === 1) {
            dataToDisplay.push({
                  x: data[i].jour,
                  y: data[i].incid_dc,
            });
      }
}

// console.log(dataToDisplay);

let dataOK = [];
let incid_hosp;
let incid_rea;
let incid_dc;
let incid_rad;

// for (let i = 0; i < data.length; i + 55) {
//       incid_hosp += data[i].incid_hosp;
//       incid_rea += data[i].incid_rea;
//       incid_dc += data[i].incid_dc;
//       incid_rad += data[i].incid_rad;
// }
// console.log(incid_hosp);
// console.log(incid_rea);
// console.log(incid_dc);
// console.log(incid_rad);

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
                              data={dataToDisplay}
                              // color="red"
                              color={0}
                              // onSeriesClick={}
                              // onSeriesMouseOver={}
                              onNearestX={(value, { event, innerX, index }) => {
                                    setHintValue({ x: value.x, y: value.y });
                              }}
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
