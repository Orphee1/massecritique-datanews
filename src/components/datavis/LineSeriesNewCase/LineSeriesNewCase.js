import React, { useContext } from "react";

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
      VerticalBarSeriesCanvas,
      LineSeries,
      LabelSeries,
} from "react-vis";
import "../../../../node_modules/react-vis/dist/style.css";

import "../../../App.css";
import "./style.css";

import data from "../../../assets/data/COVID/COVIDNewCase1205.json";
let dataToDisplay = [];
for (let i = 0; i < data.length; i++) {
      if (data[i].dep === 1) {
            dataToDisplay.push({
                  x: data[i].jour,
                  y: data[i].incid_dc,
            });
      }
}

console.log(dataToDisplay);

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
      return (
            <div>
                  <XYPlot
                        height={400}
                        width={1000}
                        // xType="time"
                        xType="ordinal"
                  >
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis />
                        <YAxis />
                        <LineSeries data={dataToDisplay} />
                  </XYPlot>
            </div>
      );
}
