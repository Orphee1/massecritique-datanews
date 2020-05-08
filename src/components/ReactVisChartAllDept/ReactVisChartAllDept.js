import React, { useState } from "react";

// React-vis
import {
      XYPlot,
      XAxis,
      YAxis,
      VerticalGridLines,
      HorizontalGridLines,
      DiscreteColorLegend,
      VerticalBarSeries,
      VerticalBarSeriesCanvas,
      MarkSeries,
      LabelSeries,
      HorizontalBarSeries,
      Hint,
} from "react-vis";
import "../../../node_modules/react-vis/dist/style.css";

export default function ReactVisChartAllDept({ data }) {
      const {
            LEFT,
            RIGHT,
            TOP,
            BOTTOM_EDGE,
            RIGHT_EDGE,
            TOP_EDGE,
      } = Hint.ALIGN;
      const CHART_MARGINS = { left: 50, right: 10, top: 10, bottom: 25 };
      const DATA_HINT_ALIGN = [
            {
                  horizontal: RIGHT_EDGE,
                  vertical: TOP,
            },
            {
                  horizontal: RIGHT,
                  vertical: BOTTOM_EDGE,
            },
            {
                  horizontal: LEFT,
                  vertical: TOP_EDGE,
            },
            {
                  horizontal: LEFT,
                  vertical: BOTTOM_EDGE,
            },
      ];

      const [value, setValue] = useState(null);
      console.log(value);

      const _rememberValue = (value) => {
            setValue(value);
      };

      let menData = [];
      let womenData = [];

      for (let i = 0; i < data.length; i++) {
            menData.push(
                  {
                        // id: i,
                        y: data[i].dep,

                        x: data[i].hosph,
                  }
                  // { x: "reanimation", y: data[i].reah },
                  // { x: "décès", y: data[i].deadh }
            );
            womenData.push(
                  {
                        // x: "hospitalisation",
                        y: data[i].dep,
                        x: data[i].hospf,
                  }
                  // { x: "reanimation", y: data[i].reaf },
                  // { x: "décès", y: data[i].deadf }
            );
      }

      function compareMenData(a, b) {
            const menDataA = a.x;
            const menDataB = b.x;
            let comparison = 0;
            if (menDataA > menDataB) {
                  comparison = 1;
            } else if (menDataA < menDataB) {
                  comparison = -1;
            }
            return comparison;
      }

      function compareWomenData(a, b) {
            const WomenDataA = a.x;
            const WomenDataB = b.x;
            let comparison = 0;
            if (WomenDataA > WomenDataB) {
                  comparison = 1;
            } else if (WomenDataA < WomenDataB) {
                  comparison = -1;
            }
            return comparison;
      }

      menData.sort(compareMenData);
      womenData.sort(compareWomenData);

      // console.log(menData);
      // console.log(womenData);

      return (
            <div>
                  <div>
                        <XYPlot
                              // xType="time"
                              type="category"
                              yType="ordinal"
                              margin={{ left: 135 }}
                              width={600}
                              height={1200}
                        >
                              <VerticalGridLines />
                              <HorizontalGridLines />
                              <HorizontalBarSeries
                                    className="vertical-bar-series-example"
                                    data={menData}
                                    barWidth={1}
                                    onNearestX={_rememberValue}
                              />
                              <HorizontalBarSeries
                                    data={womenData}
                                    barWidth={1}
                                    // onNearestX={_rememberValue}
                              />

                              <XAxis />
                              <YAxis />
                              {/* <MarkSeries
                                    onNearestX={_rememberValue}
                                    data={menData}
                              /> */}
                              {value ? (
                                    <Hint value={value}>
                                          <div className="rv-hint__content">
                                                {`(${value.x}, ${value.y})`}
                                                <br />
                                          </div>
                                    </Hint>
                              ) : null}
                              <DiscreteColorLegend
                                    style={{
                                          position: "absolute",
                                          left: "620px",
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
