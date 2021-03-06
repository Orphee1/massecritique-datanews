import React, { useState, useContext } from "react";

import { AreaClosed, Line, Bar } from "@vx/shape";
import { curveMonotoneX } from "@vx/curve";
import { GridRows, GridColumns } from "@vx/grid";
import { scaleTime, scaleLinear } from "@vx/scale";
import { useTooltip, Tooltip } from "@vx/tooltip";
import { localPoint } from "@vx/event";
import { bisector } from "d3-array";
import { timeFormat } from "d3-time-format";

import { ThemeContext } from "../../context/ThemeContext";

import "../../App.css";

import useWindowDimension from "../../assets/useWindowDimension";

export default function VXArea({ dataArea, title }) {
  // console.log(dataArea);

  const [dailyOrCumul, setDailyOrCumul] = useState("daily");
  let keyVariable = dailyOrCumul === "daily" ? "new_deaths" : "total_deaths";
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
    default:
      console.log("default");
  }
  const {
    tooltipData,
    tooltipLeft,
    tooltipTop,
    //     tooltipOpen,
    showTooltip,
    hideTooltip,
  } = useTooltip();
  const { width } = useWindowDimension();
  const widthGraph = width * 0.8;
  const height = 400;
  const margin = {
    left: 20,
    right: 20,
    top: 0,
    bottom: 40,
  };
  // bounds
  const xMax = widthGraph - margin.right;
  const yMax = height - margin.top - margin.bottom;
  // util
  const formatDate = timeFormat("%d %b %y");
  const min = (arr, fn) => Math.min(...arr.map(fn));
  const max = (arr, fn) => Math.max(...arr.map(fn));
  const extent = (arr, fn) => [min(arr, fn), max(arr, fn)];

  // // accessors
  const xStock = (d) => new Date(d.date);
  // const yStock = (d) => d.new_deaths;
  // const yStock = (d) => d.total_deaths;
  const yStock = (d) => d[keyVariable];
  const bisectDate = bisector((d) => new Date(d.date)).left;
  // scales
  const xScale = scaleTime({
    range: [0, xMax],
    domain: extent(dataArea, xStock),
  });
  const yScale = scaleLinear({
    range: [yMax, 0],
    domain: [0, max(dataArea, yStock) + yMax / 3],
    nice: true,
  });

  const handleTooltip = ({ event, data, xStock, xScale, yScale }) => {
    const { x } = localPoint(event);
    const x0 = xScale.invert(x);
    const index = bisectDate(data, x0, 1);
    const d0 = data[index - 1];
    const d1 = data[index];
    let d = d0;
    if (d1 && d1.date) {
      d = x0 - xStock(d0.date) > xStock(d1.date) - x0 ? d1 : d0;
    }
    showTooltip({
      tooltipData: d,
      tooltipLeft: x,
      // tooltipTop: yScale(d.new_deaths),
      // tooltipTop: yScale(d.total_deaths),
      tooltipTop: yScale(d[keyVariable]),
    });
  };

  return (
    <div>
      <div
        className="d-flex s-b"
        style={{
          width: "100%",
        }}
      >
        <h5 style={{ color: option.syntax }}>{title}</h5>
        <select
          className="select"
          onChange={(event) => {
            setDailyOrCumul(event.target.value);
          }}
        >
          <option value="daily">Daily</option>
          <option value="cumul">Cumulative</option>
        </select>
      </div>
      <div style={{ position: "relative" }} className="fl-col">
        <svg width={widthGraph} height={height}>
          <rect
            x={0}
            y={0}
            width={widthGraph}
            height={height}
            fill="#32deaa"
            rx={14}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity={1} />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <GridRows
            lineStyle={{ pointerEvents: "none" }}
            scale={yScale}
            width={xMax}
            strokeDasharray="2,2"
            stroke="rgba(255,255,255,0.6)"
          />
          <GridColumns
            lineStyle={{ pointerEvents: "none" }}
            scale={xScale}
            height={yMax}
            strokeDasharray="2,2"
            stroke="rgba(255,255,255,0.6)"
          />
          <AreaClosed
            data={dataArea}
            x={(d) => xScale(xStock(d))}
            y={(d) => yScale(yStock(d))}
            yScale={yScale}
            strokeWidth={1}
            stroke={"url(#gradient)"}
            fill={"url(#gradient)"}
            curve={curveMonotoneX}
          />
          <Bar
            x={0}
            y={0}
            width={width}
            height={height}
            fill="transparent"
            rx={14}
            data={dataArea}
            onTouchStart={(event) =>
              handleTooltip({
                event,
                xStock,
                xScale,
                yScale,
                data: dataArea,
              })
            }
            onTouchMove={(event) =>
              handleTooltip({
                event,
                xStock,
                xScale,
                yScale,
                data: dataArea,
              })
            }
            onMouseMove={(event) =>
              handleTooltip({
                event,
                xStock,
                xScale,
                yScale,
                data: dataArea,
              })
            }
            onMouseLeave={(event) => hideTooltip()}
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
        </svg>
        {tooltipData && (
          <div>
            <Tooltip
              top={tooltipTop - 12}
              left={tooltipLeft + 12}
              style={{
                position: "absolute",
                width: "90px",
                height: "30px",
                borderRadius: "5px",
                backgroundColor: "rgba(92, 119, 235, 1.000)",
                color: "white",

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {`${yStock(tooltipData)} décès`}
            </Tooltip>
            <Tooltip
              top={yMax - 14}
              left={tooltipLeft}
              style={{
                position: "absolute",
                transform: "translateX(-50%)",
              }}
            >
              {formatDate(xStock(tooltipData))}
            </Tooltip>
          </div>
        )}
        <p style={{ color: "white" }}>
          VX main component :{" "}
          <a
            style={{ color: "white" }}
            href="https://vx-demo.now.sh/static/docs/vx-shape.html#areaclosed-"
          >
            AreaClosed
          </a>
        </p>
      </div>
    </div>
  );
}
