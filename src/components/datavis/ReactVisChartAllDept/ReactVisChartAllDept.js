import React, { useState, useContext } from "react";

// React-vis
import {
      XYPlot,
      XAxis,
      YAxis,
      VerticalGridLines,
      HorizontalGridLines,
      DiscreteColorLegend,
      HorizontalBarSeries,
      Hint,
} from "react-vis";
import "../../../node_modules/react-vis/dist/style.css";
import { ThemeContext } from "../../../context/ThemeContext";

export default function ReactVisChartAllDept({ data }) {
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
      //
      const [type, setType] = useState("hosp");
      //
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
      if (type === "rea") {
            for (let i = 0; i < data.length; i++) {
                  menData.push({
                        y: data[i].dep,
                        x: data[i].reah,
                  });
                  womenData.push({
                        y: data[i].dep,
                        x: data[i].reaf,
                  });
            }
      } else if (type === "dec") {
            for (let i = 0; i < data.length; i++) {
                  menData.push({
                        y: data[i].dep,
                        x: data[i].deadh,
                  });
                  womenData.push({
                        y: data[i].dep,
                        x: data[i].deadf,
                  });
            }
      } else {
            for (let i = 0; i < data.length; i++) {
                  menData.push({
                        y: data[i].dep,
                        x: data[i].hosph,
                  });
                  womenData.push({
                        y: data[i].dep,
                        x: data[i].hospf,
                  });
            }
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
                  <div className="">
                        <h5 style={{ color: option.syntax, fontSize: "18px" }}>
                              Impact de l'épidémie selon le sexe
                        </h5>
                        <h5 style={{ color: option.syntax }}>
                              Librairie:{" "}
                              <a
                                    style={{ color: option.syntax }}
                                    href="https://uber.github.io/react-vis/?r=m7"
                              >
                                    React-Vis
                              </a>
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
                        <XYPlot
                              type="category"
                              yType="ordinal"
                              margin={{ left: 155 }}
                              width={600}
                              height={1600}
                              stackBy="x"
                        >
                              <VerticalGridLines />
                              <HorizontalGridLines />
                              <HorizontalBarSeries
                                    className="vertical-bar-series-example"
                                    data={menData}
                                    barWidth={0.8}
                              />
                              <HorizontalBarSeries
                                    data={womenData}
                                    barWidth={0.8}
                                    onNearestX={_rememberValue}
                              />

                              <XAxis
                                    style={{
                                          ticks: { fill: option.syntax },
                                          // text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
                                    }}
                              />
                              <YAxis
                                    style={{
                                          ticks: { fill: option.syntax },
                                          // text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
                                    }}
                              />

                              {value ? (
                                    <Hint value={value}>
                                          <div className="rv-hint__content">
                                                {`(${value.y}: ${value.x})`}
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
                                          color: option.syntax,
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
