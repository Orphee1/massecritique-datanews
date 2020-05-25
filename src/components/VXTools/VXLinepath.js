import React from "react";
import { Grid } from "@vx/grid";
import { Group } from "@vx/group";
import { curveBasis } from "@vx/curve";
import { GradientOrangeRed, GradientTealBlue } from "@vx/gradient";
import { localPoint } from "@vx/event";
import { AxisLeft, AxisRight, AxisBottom } from "@vx/axis";
import { Area, Bar, LinePath, Line } from "@vx/shape";
import { scaleTime, scaleLinear } from "@vx/scale";
import { useTooltip, Tooltip, TooltipWithBounds } from "@vx/tooltip";
import { bisector, extent } from "d3-array";
import { timeFormat, timeParse } from "d3-time-format";

import useWindowDimensions from "../../assets/useWindowDimension";

const formatDate = timeFormat("%d %b %y"); // Required by tooltip

// accessors
const x = (d) => d.date;
const y = (d) => d.value;
// const bisectDate = bisector((d) => new Date(d.date)).left;
// // accessors
const xStock = (d) => new Date(d.date);
const yStock = (d) => d.value;
const bisectDate = bisector((d) => new Date(d.date)).left;

const margin = {
      left: 80,
      right: 20,
      top: 30,
      bottom: 60,
};

// responsive utils for axis ticks
function numTicksForHeight(height) {
      if (height <= 300) return 3;
      if (300 < height && height <= 600) return 6;
      return 10;
}

function numTicksForWidth(width) {
      if (width <= 300) return 2;
      if (300 < width && width <= 400) return 6;
      return 10;
}

export default function VXLinepath({ data }) {
      const { width } = useWindowDimensions();
      const widthGraph = width * 0.8;
      const height = 500;
      const {
            tooltipData,
            tooltipLeft,
            tooltipTop,
            tooltipOpen,

            showTooltip,
            hideTooltip,
      } = useTooltip();
      let tooltipTimeout = useTooltip();

      const handleTooltip = ({ event, data, xStock, xScale, yScale }) => {
            const { x } = localPoint(event);
            const x0 = xScale.invert(x);
            const index = bisectDate(data[0], x0, 1);
            const index2 = bisectDate(data[1], x0, 1);
            const index3 = bisectDate(data[2], x0, 1);
            const index4 = bisectDate(data[3], x0, 1);
            const d0 = data[0][index - 1];
            const d02 = data[1][index2 - 1];
            const d03 = data[2][index3 - 1];
            const d04 = data[3][index4 - 1];
            const d1 = data[0][index];
            const d12 = data[1][index2];
            const d13 = data[2][index3];
            const d14 = data[3][index4];
            let d = d0;
            let d2 = d02;
            let d3 = d03;
            let d4 = d04;
            if (d1 && d1.date) {
                  d = x0 - xStock(d0.date) > xStock(d1.date) - x0 ? d1 : d0;
            }
            if (d12 && d12.date) {
                  d2 =
                        x0 - xStock(d02.date) > xStock(d12.date) - x0
                              ? d12
                              : d02;
            }
            if (d13 && d13.date) {
                  d3 =
                        x0 - xStock(d03.date) > xStock(d13.date) - x0
                              ? d13
                              : d03;
            }
            if (d14 && d14.date) {
                  d4 =
                        x0 - xStock(d04.date) > xStock(d14.date) - x0
                              ? d14
                              : d04;
            }
            showTooltip({
                  tooltipData: [d, d2, d3, d4],
                  tooltipLeft: x,
                  tooltipTop: yScale(d2.value),
            });
            console.log(tooltipTop);
      };

      // bounds
      const xMax = widthGraph - margin.left - margin.right;
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
                  style={{
                        width: widthGraph,
                        marginBottom: "40px",
                  }}
            >
                  <svg width={widthGraph} height={height}>
                        {" "}
                        <GradientTealBlue id="teal" />
                        <rect
                              x={0}
                              y={0}
                              width={widthGraph}
                              height={height}
                              fill={"url(#teal)"}
                              rx={14}
                        />
                        <Grid
                              top={margin.top}
                              left={margin.left}
                              xScale={xScale}
                              yScale={yScale}
                              strokeDasharray="2,2"
                              stroke="rgba(255,255,255,0.6)"
                              width={widthGraph}
                              height={height}
                              numTicksRows={numTicksForHeight(600)}
                              numTicksColumns={numTicksForWidth(800)}
                        />
                        <Group top={margin.top} left={margin.left}>
                              <Bar
                                    x={0}
                                    y={0}
                                    width={width}
                                    height={height}
                                    fill="transparent"
                                    rx={14}
                                    // data={data[1]}
                                    data={data}
                                    onTouchStart={(event) =>
                                          handleTooltip({
                                                event,
                                                xStock,
                                                xScale,
                                                yScale,
                                                data: data,
                                          })
                                    }
                                    onTouchMove={(event) =>
                                          handleTooltip({
                                                event,
                                                xStock,
                                                xScale,
                                                yScale,
                                                data: data,
                                          })
                                    }
                                    onMouseMove={(event) =>
                                          handleTooltip({
                                                event,
                                                xStock,
                                                xScale,
                                                yScale,
                                                data: data,
                                          })
                                    }
                                    onMouseLeave={(event) => hideTooltip()}
                              />
                              {/* <Area
                                    data={data[1]}
                                    x={(d) => xScale(x(d))}
                                    y0={(d) => yScale.range()[0]}
                                    y1={(d) => yScale(y(d))}
                                    strokeWidth={2}
                                    stroke={"transparent"}
                                    fill={"url(#linear)"}
                                    curve={curveBasis}
                              /> */}

                              <LinePath
                                    // DataDC
                                    data={data[0]}
                                    x={(d) => xScale(x(d))}
                                    y={(d) => yScale(y(d))}
                                    stroke="red"
                                    strokeWidth={4}
                                    curve={curveBasis}
                              />
                              <LinePath
                                    // DataH
                                    data={data[1]}
                                    x={(d) => xScale(x(d))}
                                    y={(d) => yScale(y(d))}
                                    stroke="purple"
                                    strokeWidth={3}
                                    curve={curveBasis}
                              />
                              <LinePath
                                    // DataR
                                    data={data[2]}
                                    x={(d) => xScale(x(d))}
                                    y={(d) => yScale(y(d))}
                                    // stroke={"url('#linear')"}
                                    stroke="pink"
                                    strokeWidth={3}
                                    curve={curveBasis}
                              />
                              <LinePath
                                    // DataRD
                                    data={data[3]}
                                    x={(d) => xScale(x(d))}
                                    y={(d) => yScale(y(d))}
                                    stroke="orange"
                                    strokeWidth={3}
                                    curve={curveBasis}
                              />
                              {tooltipData && (
                                    <g>
                                          <Line
                                                from={{ x: tooltipLeft, y: 0 }}
                                                to={{ x: tooltipLeft, y: yMax }}
                                                stroke="rgba(92, 119, 235, 1.000)"
                                                strokeWidth={2}
                                                style={{
                                                      pointerEvents: "none",
                                                }}
                                                strokeDasharray="2,2"
                                          />
                                          <circle
                                                cx={tooltipLeft}
                                                cy={tooltipTop + 1}
                                                r={4}
                                                fill="black"
                                                fillOpacity={0.1}
                                                stroke="black"
                                                strokeOpacity={0.1}
                                                strokeWidth={2}
                                                style={{
                                                      pointerEvents: "none",
                                                }}
                                          />
                                          <circle
                                                cx={tooltipLeft}
                                                cy={tooltipTop}
                                                r={4}
                                                fill="rgba(92, 119, 235, 1.000)"
                                                stroke="white"
                                                strokeWidth={2}
                                                style={{
                                                      pointerEvents: "none",
                                                }}
                                          />
                                    </g>
                              )}
                        </Group>
                        <Group left={margin.left}>
                              <AxisLeft
                                    top={margin.top}
                                    left={0}
                                    scale={yScale}
                                    hideZero
                                    numTicks={numTicksForHeight(600)}
                                    // label="Nombre de cas"
                                    // labelProps={{
                                    //       fill: "#8e205f",
                                    //       textAnchor: "middle",
                                    //       fontSize: 12,
                                    //       fontFamily: "Arial",
                                    // }}
                                    stroke="#1b1a1e"
                                    // stroke="white"
                                    tickStroke="#8e205f"
                                    // tickStroke="white"
                                    tickLabelProps={(value, index) => ({
                                          fill: "#8e205f",
                                          // fill: "white",
                                          textAnchor: "end",
                                          fontSize: 20,
                                          fontFamily: "Roboto",
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
                                    // label="Time"
                              >
                                    {(axis) => {
                                          const tickLabelSize = 10;
                                          const tickRotate = 315;
                                          const tickColor = "#8e205f";
                                          // const tickColor = "white";
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
                  {tooltipData && (
                        <div>
                              <Tooltip
                                    top={tooltipTop - 12}
                                    left={tooltipLeft + 12}
                                    style={{
                                          position: "absolute",
                                          width: "210px",
                                          height: "90px",
                                          borderRadius: "5px",
                                          // backgroundColor:
                                          //       "rgba(92, 119, 235, 1.000)",
                                          backgroundColor: "black",
                                          color: "white",

                                          justifyContent: "center",
                                          alignItems: "center",
                                    }}
                              >
                                    <div
                                          style={{
                                                width: "90%",
                                                height: "90%",
                                                padding: "5px",
                                          }}
                                    >
                                          Hospitalisations:{" "}
                                          <strong>
                                                {yStock(tooltipData[1])}
                                          </strong>
                                          <br />
                                          Décès:{" "}
                                          <strong>
                                                {yStock(tooltipData[0])}
                                          </strong>
                                          <br />
                                          Réanimations:{" "}
                                          <strong>
                                                {yStock(tooltipData[2])}
                                          </strong>
                                          <br />
                                          Retours à domicile:{" "}
                                          <strong>
                                                {yStock(tooltipData[3])}
                                          </strong>
                                    </div>
                              </Tooltip>
                              <Tooltip
                                    top={yMax + 90}
                                    left={tooltipLeft}
                                    style={{
                                          position: "absolute",
                                          transform: "translateX(-50%)",
                                    }}
                              >
                                    <div
                                          style={{
                                                background: "white",
                                                color: "blue",
                                                width: "90px",

                                                borderRadius: "5px",
                                                height: "20px",
                                          }}
                                    >
                                          {formatDate(xStock(tooltipData[0]))}
                                    </div>
                              </Tooltip>
                        </div>
                  )}
                  <p style={{ color: "white" }}>
                        VX main component :{" "}
                        <a
                              style={{ color: "white" }}
                              href="https://vx-demo.now.sh/static/docs/vx-shape.html#linepath-"
                        >
                              LinePath
                        </a>
                  </p>
            </div>
      );
}
