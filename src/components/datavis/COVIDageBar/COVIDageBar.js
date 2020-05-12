import React, { useState, useContext } from "react";

import { ThemeContext } from "../../../context/ThemeContext";

import "../../App.css";
import "./style.css";
import "../../../node_modules/react-vis/dist/style.css";
import {
      XYPlot,
      XAxis,
      YAxis,
      VerticalGridLines,
      HorizontalGridLines,
      VerticalBarSeries,
      Hint,
} from "react-vis";

export default function COVIDageBar({
      data,
      type,
      regSelected,
      setRegSelected,
}) {
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

      const [value, setValue] = useState(null);
      console.log(value);

      const _rememberValue = (value) => {
            setValue(value);
      };

      return (
            <div className="fl-col">
                  <h5>{type}</h5>
                  <XYPlot
                        width={300}
                        height={300}
                        xType="ordinal"
                        margin={{ bottom: 70 }}
                  >
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis
                              style={{
                                    ticks: { fill: option.syntax },
                              }}
                              tickLabelAngle={-45}
                        />
                        <YAxis
                              style={{
                                    ticks: { fill: option.syntax },
                              }}
                        />
                        <VerticalBarSeries
                              data={data}
                              onNearestX={_rememberValue}
                        />
                        {value ? (
                              <Hint value={value}>
                                    <div className="rv-hint__content">
                                          {`${value.x}: ${value.y} %`}
                                          <br />
                                    </div>
                              </Hint>
                        ) : null}
                  </XYPlot>
            </div>
      );
}
