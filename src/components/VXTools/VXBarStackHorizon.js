import React from "react";
import { BarStackHorizontal } from "@vx/shape";
import { Group } from "@vx/group";
import { AxisBottom, AxisLeft } from "@vx/axis";
import { cityTemperature } from "@vx/mock-data";
import { scaleBand, scaleLinear, scaleOrdinal } from "@vx/scale";
import { timeParse, timeFormat } from "d3-time-format";
import { withTooltip, Tooltip } from "@vx/tooltip";
import { LegendOrdinal } from "@vx/legend";

import "../../App.css";
import useWindowDimensions from "../../assets/useWindowDimension";

const purple1 = "#6c5efb";
const purple2 = "#c998ff";
const purple3 = "#a44afe";
const bg = "#eaedff";

export default function BarStackHorizonExample({
      events = false,
      margin = {
            top: 40,
            left: 150,
            right: 40,
            bottom: 100,
      },
      data,
}) {
      const { width } = useWindowDimensions();
      const widthGraph = width * 0.8;
      const height = 2400;
      if (widthGraph < 10) return null;

      function compareDeadDec(a, b) {
            const deadA = a.dead;
            const deadB = b.dead;
            let comparison = 0;
            if (deadA > deadB) {
                  comparison = 1;
            } else if (deadA < deadB) {
                  comparison = -1;
            }
            return comparison;
      }

      const dataTodisplay = data.sort(compareDeadDec);
      console.log(data.length);
      const keys = Object.keys(data[0]).filter(
            (d) => d === "deadh" || d === "deadf"
      );
      console.log(keys);

      // Value required by xScale
      const totals = dataTodisplay.reduce((ret, cur) => {
            const t = keys.reduce((total, k) => {
                  total += +cur[k];
                  return total;
            }, 0);
            ret.push(t);
            return ret;
      }, []);

      // accessors
      const y = (d) => d.dep;

      // scales
      const xScale = scaleLinear({
            domain: [0, Math.max(...totals)],
            nice: true,
      });
      // console.log(Math.max(...totals));

      const yScale = scaleBand({
            domain: dataTodisplay.map(y),
            padding: 0.2,
      });
      const color = scaleOrdinal({
            domain: keys,
            range: [purple1, purple2, purple3],
      });

      let tooltipTimeout;

      // bounds
      const xMax = widthGraph - margin.left - margin.right;
      const yMax = height - margin.top - margin.bottom;

      xScale.rangeRound([0, xMax]);
      yScale.rangeRound([yMax, 0]);
      return (
            <div style={{ position: "relative" }}>
                  <svg width={widthGraph} height={height}>
                        <rect
                              width={widthGraph}
                              height={height}
                              // fill={bg}
                              rx={0}
                        />
                        <Group top={margin.top} left={margin.left}>
                              <BarStackHorizontal
                                    data={dataTodisplay}
                                    keys={keys}
                                    height={yMax}
                                    y={y}
                                    xScale={xScale}
                                    yScale={yScale}
                                    color={color}
                              >
                                    {(barStacks) => {
                                          return barStacks.map((barStack) => {
                                                return barStack.bars.map(
                                                      (bar) => {
                                                            return (
                                                                  <rect
                                                                        key={`barstack-horizontal-${barStack.index}-${bar.index}`}
                                                                        x={
                                                                              bar.x
                                                                        }
                                                                        y={
                                                                              bar.y
                                                                        }
                                                                        width={
                                                                              bar.width
                                                                        }
                                                                        // height={
                                                                        //       bar.height
                                                                        // }
                                                                        height={
                                                                              20
                                                                        }
                                                                        fill={
                                                                              bar.color
                                                                        }
                                                                        // onClick={event => {
                                                                        //       if (!events) return;
                                                                        //       alert(`clicked: ${JSON.stringify(bar)}`);
                                                                        //     }}
                                                                        // onMouseLeave={event => {
                                                                        //       tooltipTimeout = setTimeout(() => {
                                                                        //         hideTooltip();
                                                                        //       }, 300);
                                                                        //     }}
                                                                        // onMouseMove={event => {
                                                                        //       if (tooltipTimeout) clearTimeout(tooltipTimeout);
                                                                        //       const top = bar.y + margin.top;
                                                                        //       const left = bar.x + bar.width + margin.left;
                                                                        //       showTooltip({
                                                                        //         tooltipData: bar,
                                                                        //         tooltipTop: top,
                                                                        //         tooltipLeft: left
                                                                        //       });
                                                                        //     }}
                                                                  ></rect>
                                                            );
                                                      }
                                                );
                                          });
                                    }}
                              </BarStackHorizontal>
                              <AxisLeft
                                    hideAxisLine={true}
                                    hideTicks={true}
                                    scale={yScale}
                                    // tickFormat={formatDate}
                                    numTicks={dataTodisplay.length}
                                    stroke="#8e205f"
                                    tickStroke="#8e205f"
                                    tickLabelProps={(value, index) => ({
                                          fill: "#8e205f",
                                          fontSize: 11,
                                          textAnchor: "end",
                                          dy: "0.33em",
                                    })}
                              />
                              <AxisBottom
                                    top={yMax}
                                    scale={xScale}
                                    stroke="#8e205f"
                                    tickStroke="#8e205f"
                                    tickLabelProps={(value, index) => ({
                                          fill: "#8e205f",
                                          fontSize: 11,
                                          textAnchor: "middle",
                                    })}
                              />
                        </Group>
                  </svg>
                  <div
                        style={{
                              position: "absolute",
                              top: margin.top / 2 - 10,
                              width: "100%",
                              display: "flex",
                              justifyContent: "center",
                              fontSize: "14px",
                              // color: purple3,
                              color: "#8e205f",
                        }}
                  >
                        <LegendOrdinal
                              scale={color}
                              direction="row"
                              labelMargin="0 15px 0 0"
                        />
                  </div>
            </div>
      );
}
