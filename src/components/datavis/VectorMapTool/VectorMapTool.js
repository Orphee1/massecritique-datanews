import React, { useState, useContext } from "react";

import { VectorMap } from "@south-paw/react-vector-maps";

import { ThemeContext } from "../../../context/ThemeContext";

import "../../../App.css";
import "./style.css";

// Maps import
import franceDepts from "../../../assets/maps/FranceDepts.json";

import useWindowDimensions from "../../../assets/useWindowDimension";

export default function VectorMapTool() {
      const [hovered, setHovered] = useState("None");
      const [setFocused] = useState("None");
      const [setClicked] = useState("None");
      const [dataHToDisplay, setDataHToDisplay] = useState();
      const [dataRToDisplay, setDataRToDisplay] = useState();
      const [dataDToDisplay, setDataDToDisplay] = useState();

      const layerProps = {
            onMouseEnter: ({ target }) => {
                  setHovered(target.attributes.name.value);

                  for (let i = 0; i < dataUpdated.length; i++) {
                        if (
                              target.attributes.name.value ===
                              dataUpdated[i].dep
                        ) {
                              setDataHToDisplay(dataUpdated[i].hosp);
                              setDataRToDisplay(dataUpdated[i].rea);
                              setDataDToDisplay(dataUpdated[i].dead);
                              console.log(dataUpdated[i].hosp);
                              console.log(dataUpdated[i].rea);
                              console.log(dataUpdated[i].dc);
                        }
                  }
            },
            // setHovered(target.attributes.id.value),
            onMouseLeave: ({ target }) => setHovered("None"),
            onFocus: ({ target }) => setFocused(target.attributes.name.value),
            onBlur: ({ target }) => setFocused("None"),
            onClick: ({ target }) => setClicked(target.attributes.name.value),
            // onClick: ({ target }) => setDataToDisplay(true)
      };

      return (
            <>
                  <div
                        className="data-flex"
                        style={{
                              height: height * 0.9,
                              marginBottom: "20px",
                        }}
                  >
                        <div className="graph-covid-france-map">
                              <VectorMap
                                    style={{ fill: option.syntax }}
                                    {...franceDepts}
                                    layerProps={layerProps}
                                    className="map"
                              />
                        </div>
                        <h5
                              style={{
                                    color: option.syntax,
                              }}
                        >
                              Librairie :{" "}
                              <a
                                    href="https://react-vector-maps.netlify.app/"
                                    style={{
                                          fontWeight: "bold",

                                          color: option.syntax,
                                    }}
                              >
                                    {" "}
                                    React Vector Maps
                              </a>
                        </h5>
                  </div>
                  <div className="data-flex">
                        <div className="graph-comment1">
                              <h5
                                    style={{
                                          color: option.syntax,
                                          width: "100%",
                                          fontSize: "18px",
                                          // fontWeight: "bold",
                                          marginLeft: "0",
                                          marginBottom: "0",
                                    }}
                              >
                                    Données hospitalières au {date}:
                              </h5>
                              <h5 style={{ color: option.syntax }}>
                                    Source:{" "}
                                    <a
                                          style={{ color: option.syntax }}
                                          href="https://geodes.santepubliquefrance.fr/#c=home"
                                    >
                                          Santé Publique France
                                    </a>
                              </h5>
                        </div>
                        <div className="graph-comment2">
                              <h5
                                    style={{
                                          color: option.syntax,
                                          fontFamily: "Roboto",
                                    }}
                              >
                                    {hovered !== "None" && (
                                          <code>{hovered} :</code>
                                    )}
                              </h5>

                              {hovered !== "None" && (
                                    <>
                                          <p
                                                style={{
                                                      marginBottom: 5,

                                                      color: option.syntax,
                                                      fontFamily: "Roboto",
                                                }}
                                          >
                                                Nombre de personnes
                                                hospitalisées pour cause de
                                                COVID-19 :{" "}
                                                {dataHToDisplay && (
                                                      <code
                                                            style={{
                                                                  fontWeight:
                                                                        "bold",
                                                            }}
                                                      >
                                                            {dataHToDisplay}
                                                      </code>
                                                )}
                                          </p>

                                          <p
                                                style={{
                                                      marginBottom: 5,
                                                      color: option.syntax,
                                                }}
                                          >
                                                Nombre de personnes en
                                                réanimation pour cause de
                                                COVID-19 :{" "}
                                                {dataRToDisplay && (
                                                      <code
                                                            style={{
                                                                  fontWeight:
                                                                        "bold",
                                                            }}
                                                      >
                                                            {dataRToDisplay}
                                                      </code>
                                                )}
                                          </p>
                                          <p
                                                style={{
                                                      color: option.syntax,
                                                      marginBottom: 5,
                                                }}
                                          >
                                                Nombre de personnes décédées
                                                depuis le début de l'épidémie :{" "}
                                                {dataDToDisplay && (
                                                      <code
                                                            style={{
                                                                  fontWeight:
                                                                        "bold",
                                                            }}
                                                      >
                                                            {dataDToDisplay}
                                                      </code>
                                                )}
                                          </p>
                                    </>
                              )}
                        </div>
                        <div className="graph-comment3">
                              <h5 style={{ color: option.syntax }}>
                                    Total national:
                              </h5>

                              <div>
                                    <p
                                          style={{
                                                color: option.syntax,
                                                marginBottom: 5,
                                          }}
                                    >
                                          Personnes actuellement hospitalisées:
                                          <span
                                                style={{
                                                      fontWeight: "bold",
                                                }}
                                          >
                                                {" "}
                                                {totalH}
                                          </span>
                                    </p>
                                    <p
                                          style={{
                                                color: option.syntax,

                                                marginBottom: 5,
                                          }}
                                    >
                                          Personnes actuellement en réanimation:
                                          <span
                                                style={{
                                                      fontWeight: "bold",
                                                }}
                                          >
                                                {" "}
                                                {totalR}
                                          </span>
                                    </p>
                                    <p
                                          style={{
                                                color: option.syntax,
                                                marginBottom: 5,
                                          }}
                                    >
                                          Personnes décédées à l'hôpital:
                                          <span
                                                style={{
                                                      fontWeight: "bold",
                                                }}
                                          >
                                                {" "}
                                                {totalD}
                                          </span>
                                    </p>
                              </div>
                        </div>
                  </div>
            </>
      );
}
