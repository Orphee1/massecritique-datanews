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
      FlexibleXYPlot,
      LineSeries,
      LabelSeries,
      makeWidthFlexible,
} from "react-vis";
import "../../../../node_modules/react-vis/dist/style.css";

import "../../../App.css";
import "./style.css";

import useWindowDimensions from "../../../assets/useWindowDimension";

export default function LineSeriesNewCase({
      data,
      crossHairValues,
      setCrossHairValues,
}) {
      const dataToDisplay = data;

      // const FlexibleXYPlot = makeWidthFlexible(XYPlot);
      const { width, height } = useWindowDimensions();
      console.log(height);

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
            <div
                  className="lineChart-container"
                  style={{
                        width: width * 0.8,
                        height: "400px",
                  }}
            >
                  {dataToDisplay && (
                        <FlexibleXYPlot
                              xType="ordinal"
                              colorType="linear"
                              margin={{ bottom: 70, left: 50 }}
                              onMouseLeave={() => {
                                    setCrossHairValues(null);
                              }}
                        >
                              <VerticalGridLines />
                              <HorizontalGridLines />
                              <XAxis
                                    className="remove768"
                                    tickLabelAngle={-45}
                              />
                              <YAxis />
                              <LineSeries
                                    data={dataToDisplay[0]}
                                    strokeWidth={6}
                                    color="red"
                                    onNearestX={(value, { index }) => {
                                          setCrossHairValues(
                                                dataToDisplay.map(
                                                      (d) => d[index]
                                                )
                                          );
                                    }}
                              />
                              <LineSeries data={dataToDisplay[1]} />
                              <LineSeries data={dataToDisplay[2]} />
                              <LineSeries data={dataToDisplay[3]} />

                              {crossHairValues ? (
                                    <Crosshair values={crossHairValues}>
                                          <div className="rv-hint__content">
                                                <p
                                                      style={{
                                                            fontWeight: "bold",
                                                      }}
                                                >
                                                      {crossHairValues[0].x}
                                                </p>
                                                <p>
                                                      Décès:{" "}
                                                      {crossHairValues[0].y}
                                                </p>
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
                                          left: width / 1.8,
                                          top: "0px",
                                          fontWeight: "bold",
                                          color: option.syntax,
                                    }}
                                    orientation="vertical"
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
                        </FlexibleXYPlot>
                  )}
            </div>
      );
}
