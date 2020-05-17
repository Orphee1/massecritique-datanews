import React from "react";
import { Grid } from "@vx/grid";
import { Group } from "@vx/group";
import { curveBasis } from "@vx/curve";
import { GradientOrangeRed } from "@vx/gradient";
import { genDateValue } from "@vx/mock-data";
import { AxisLeft, AxisRight, AxisBottom } from "@vx/axis";
import { Area, LinePath, Line } from "@vx/shape";
import { scaleTime, scaleLinear } from "@vx/scale";
import { extent } from "d3-array";
import { timeFormat, timeParse } from "d3-time-format";

import useWindowDimensions from "../../assets/useWindowDimension";

// accessors
const x = (d) => d.date;
const y = (d) => d.value;

const margin = {
      left: 80,
      right: 20,
      top: 30,
      bottom: 60,
};

// responsive utils for axis ticks
function numTicksForHeight(height) {
      if (height <= 300) return 3;
      if (300 < height && height <= 600) return 5;
      return 10;
}

function numTicksForWidth(width) {
      if (width <= 300) return 2;
      if (300 < width && width <= 400) return 5;
      return 10;
}

export default function VXLinepath({ data }) {
      const { width } = useWindowDimensions();
      const widthGraph = width * 0.8;
      const height = 400;

      // bounds
      const xMax = width - margin.left - margin.right;
      const yMax = height - margin.top - margin.bottom;

      // scales
      const xScale = scaleTime({
            range: [0, xMax],
            domain: extent(data[1], x),
      });
      const yScale = scaleLinear({
            range: [yMax, 0],
            domain: [0, Math.max(...data[1].map(y))],
            nice: true,
      });

      return (
            <div
                  className=""
                  style={{
                        width: widthGraph,
                        height: "400px",
                        marginBottom: "40px",
                  }}
            >
                  <svg width={widthGraph} height={height}>
                        {" "}
                        <GradientOrangeRed
                              id="linear"
                              vertical={false}
                              fromOpacity={0.8}
                              toOpacity={0.3}
                        />
                        <rect
                              x={0}
                              y={0}
                              width={widthGraph}
                              height={height}
                              fill="#f4419f"
                              rx={14}
                        />
                        <Grid
                              top={margin.top}
                              left={margin.left}
                              xScale={xScale}
                              yScale={yScale}
                              stroke="rgba(142, 32, 95, 0.9)"
                              width={widthGraph}
                              height={height}
                              numTicksRows={numTicksForHeight(600)}
                              numTicksColumns={numTicksForWidth(800)}
                        />
                        <Group top={margin.top} left={margin.left}>
                              <Area
                                    data={data[1]}
                                    x={(d) => xScale(x(d))}
                                    y0={(d) => yScale.range()[0]}
                                    y1={(d) => yScale(y(d))}
                                    strokeWidth={2}
                                    stroke={"transparent"}
                                    fill={"url(#linear)"}
                                    curve={curveBasis}
                              />
                              <LinePath
                                    data={data[0]}
                                    x={(d) => xScale(x(d))}
                                    y={(d) => yScale(y(d))}
                                    stroke={"url('#linear')"}
                                    strokeWidth={2}
                                    curve={curveBasis}
                              />
                              <LinePath
                                    data={data[1]}
                                    x={(d) => xScale(x(d))}
                                    y={(d) => yScale(y(d))}
                                    stroke={"url('#linear')"}
                                    strokeWidth={2}
                                    curve={curveBasis}
                              />
                              <LinePath
                                    data={data[2]}
                                    x={(d) => xScale(x(d))}
                                    y={(d) => yScale(y(d))}
                                    stroke={"url('#linear')"}
                                    strokeWidth={2}
                                    curve={curveBasis}
                              />
                              <LinePath
                                    data={data[3]}
                                    x={(d) => xScale(x(d))}
                                    y={(d) => yScale(y(d))}
                                    stroke={"url('#linear')"}
                                    strokeWidth={2}
                                    curve={curveBasis}
                              />
                        </Group>
                        <Group left={margin.left}>
                              <AxisLeft
                                    top={margin.top}
                                    left={0}
                                    scale={yScale}
                                    hideZero
                                    numTicks={numTicksForHeight(600)}
                                    label="Axis Left Label"
                                    labelProps={{
                                          fill: "#8e205f",
                                          textAnchor: "middle",
                                          fontSize: 12,
                                          fontFamily: "Arial",
                                    }}
                                    stroke="#1b1a1e"
                                    tickStroke="#8e205f"
                                    tickLabelProps={(value, index) => ({
                                          fill: "#8e205f",
                                          textAnchor: "end",
                                          fontSize: 20,
                                          fontFamily: "Arial",
                                          dx: "-0.25em",
                                          dy: "0.25em",
                                    })}
                                    tickComponent={({
                                          formattedValue,
                                          ...tickProps
                                    }) => (
                                          <text {...tickProps}>
                                                {formattedValue}
                                          </text>
                                    )}
                              />

                              <AxisBottom
                                    top={height - margin.bottom}
                                    left={0}
                                    scale={xScale}
                                    numTicks={numTicksForWidth(width)}
                                    label="Time"
                              >
                                    {(axis) => {
                                          const tickLabelSize = 10;
                                          const tickRotate = 315;
                                          const tickColor = "#8e205f";
                                          const axisCenter =
                                                (axis.axisToPoint.x -
                                                      axis.axisFromPoint.x) /
                                                2;
                                          return (
                                                <g className="my-custom-bottom-axis">
                                                      {axis.ticks.map(
                                                            (tick, i) => {
                                                                  const tickX =
                                                                        tick.to
                                                                              .x;
                                                                  const tickY =
                                                                        tick.to
                                                                              .y +
                                                                        tickLabelSize +
                                                                        axis.tickLength;
                                                                  return (
                                                                        <Group
                                                                              key={`vx-tick-${tick.value}-${i}`}
                                                                              className={
                                                                                    "vx-axis-tick"
                                                                              }
                                                                        >
                                                                              <Line
                                                                                    from={
                                                                                          tick.from
                                                                                    }
                                                                                    to={
                                                                                          tick.to
                                                                                    }
                                                                                    stroke={
                                                                                          tickColor
                                                                                    }
                                                                              />
                                                                              <text
                                                                                    transform={`translate(${tickX}, ${tickY}) rotate(${tickRotate})`}
                                                                                    fontSize={
                                                                                          tickLabelSize
                                                                                    }
                                                                                    textAnchor="middle"
                                                                                    fill={
                                                                                          tickColor
                                                                                    }
                                                                              >
                                                                                    {
                                                                                          tick.formattedValue
                                                                                    }
                                                                              </text>
                                                                        </Group>
                                                                  );
                                                            }
                                                      )}
                                                      <text
                                                            textAnchor="middle"
                                                            transform={`translate(${axisCenter}, 50)`}
                                                            fontSize="8"
                                                      >
                                                            {axis.label}
                                                      </text>
                                                </g>
                                          );
                                    }}
                              </AxisBottom>
                        </Group>
                  </svg>
            </div>
      );
}
