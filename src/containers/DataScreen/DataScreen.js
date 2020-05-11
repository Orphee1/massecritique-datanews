import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

// Libraries

import { VectorMap } from "@south-paw/react-vector-maps";
// Recharts
import {
      BarChart,
      Bar,
      Cell,
      XAxis,
      YAxis,
      CartesianGrid,
      Tooltip,
      Legend,
} from "recharts";

import { ThemeContext } from "../../context/ThemeContext";

import "../../App.css";
import "./style.css";
import useWindowDimensions from "../../assets/useWindowDimension";

// Components import
import CovidChartScreen from "../../components/CovidChartScreen/CovidChartScreen";
import AllDeptsCovidChart from "../../components/AllDeptsCovidChart/AllDeptsCovidChart";
import AllDeptAgeCovidChart from "../../components/AllDeptAgeCovidChart/AllDeptAgeCovidChart";
import ReactVisChart from "../../components/ReactVisChart/ReactVisChart";
import ReactVisChartAllDept from "../../components/ReactVisChartAllDept/ReactVisChartAllDept";
import COVIDageBar from "../../components/COVIDageBar/COVIDageBar";

// Icons import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Maps import
import franceDepts from "../../assets/maps/FranceDepts.json";

// Data import
import COVID0905 from "../../assets/data/COVID/COVID0905.json";
import COVID09DeadAge from "../../assets/data/COVID/COVID0905DeadAge.json";
import dead from "../../assets/data/COVID/COVID0905DeadAge.json";
import hosp from "../../assets/data/COVID/COVID0905HospAge.json";
import rea from "../../assets/data/COVID/COVID0905ReaAge.json";

const date = "09 mai";
const dataUpdated = COVID0905;

const optionReg = [
      "Île-de-France",
      "Guadeloupe",
      "Martinique",
      "Guyane",
      "La Réunion",
      "Mayotte",
      "Centre-Val de Loire",
      "Bourgogne-Franche-Comté",
      "Normandie",
      "Hauts-de-France",
      "Grand-Est",
      "Pays de la Loire",
      "Bretagne",
      "Nouvelle-Aquitaine",
      "Occitanie",
      "Auvergne-Rhône-Alpes",
      "Provence-Alpes-Côte d'Azur",
      "Corse",
];

const options = [];
for (let i = 0; i < optionReg.length; i++) {
      options.push(
            <option key={i} value={optionReg[i]}>
                  {optionReg[i]}
            </option>
      );
}

export default function DataScreen() {
      const { height } = useWindowDimensions();
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

      // Date treatment

      let totalH = 0;
      for (let i = 0; i < dataUpdated.length; i++) {
            totalH += dataUpdated[i].hosp;
      }
      // console.log(totalH);

      let totalR = 0;
      for (let i = 0; i < dataUpdated.length; i++) {
            totalR += dataUpdated[i].rea;
      }
      // console.log(totalR);

      let totalD = 0;
      for (let i = 0; i < dataUpdated.length; i++) {
            totalD += dataUpdated[i].dead;
      }
      // console.log(totalD);

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

      // State required by COVIDageBar component
      const [regSelected, setRegSelected] = useState("Île-de-France");
      console.log(regSelected);
      // Data treatment for COVIDageBar component
      let dataDCTodisplay = [];
      for (let i = 0; i < dead.length; i++) {
            if (dead[i].Libellé === regSelected) {
                  dataDCTodisplay.push(
                        { x: "0-9 ans", y: dead[i].re09 },
                        { x: "10-19 ans", y: dead[i].rel1019 },
                        {
                              x: "20-29 ans",
                              y: dead[i].rel2029,
                        },
                        {
                              x: "30-39 ans",
                              y: dead[i].rel3039,
                        },
                        {
                              x: "40-49 ans",
                              y: dead[i].rel4049,
                        },
                        {
                              x: "50-59 ans",
                              y: dead[i].rel5059,
                        },
                        {
                              x: "60-69 ans",
                              y: dead[i].rel6069,
                        },
                        {
                              x: "70-79 ans",
                              y: dead[i].rel7079,
                        },
                        {
                              x: "80-89 ans",
                              y: dead[i].rel8089,
                        },
                        {
                              x: "Plus de 90 ans",
                              y: dead[i].rel90,
                        }
                  );
            }
      }
      // console.log(dataDCTodisplay);

      let dataHTodisplay = [];
      for (let i = 0; i < hosp.length; i++) {
            if (hosp[i].Libelle === regSelected) {
                  dataHTodisplay.push(
                        { x: "0-9 ans", y: hosp[i].rel09 },
                        { x: "10-19 ans", y: hosp[i].rel1019 },
                        {
                              x: "20-29 ans",
                              y: hosp[i].rel2029,
                        },
                        {
                              x: "30-39 ans",
                              y: hosp[i].rel3039,
                        },
                        {
                              x: "40-49 ans",
                              y: hosp[i].rel4049,
                        },
                        {
                              x: "50-59 ans",
                              y: hosp[i].rel5059,
                        },
                        {
                              x: "60-69 ans",
                              y: hosp[i].rel6069,
                        },
                        {
                              x: "70-79 ans",
                              y: hosp[i].rel7079,
                        },
                        {
                              x: "80-89 ans",
                              y: hosp[i].rel8089,
                        },
                        {
                              x: "Plus de 90 ans",
                              y: hosp[i].rel90,
                        }
                  );
            }
      }
      // console.log(dataHTodisplay);

      let dataRTodisplay = [];
      for (let i = 0; i < rea.length; i++) {
            if (rea[i].Libellé === regSelected) {
                  dataRTodisplay.push(
                        { x: "0-9 ans", y: rea[i].rea09 },
                        { x: "10-19 ans", y: rea[i].rel1019 },
                        {
                              x: "20-29 ans",
                              y: rea[i].rel2029,
                        },
                        {
                              x: "30-39 ans",
                              y: rea[i].rel3039,
                        },
                        {
                              x: "40-49 ans",
                              y: rea[i].rel4049,
                        },
                        {
                              x: "50-59 ans",
                              y: rea[i].rel5059,
                        },
                        {
                              x: "60-69 ans",
                              y: rea[i].rel6069,
                        },
                        {
                              x: "70-79 ans",
                              y: rea[i].rel7079,
                        },
                        {
                              x: "80-89 ans",
                              y: rea[i].rel8089,
                        },
                        {
                              x: "Plus de 90 ans",
                              y: rea[i].rel90,
                        }
                  );
            }
      }
      console.log(dataRTodisplay);

      return (
            <div
                  className="page"
                  style={{
                        background: option.syntax,
                        marginTop: "60px",
                  }}
            >
                  <div
                        className="data-container"
                        style={{
                              background: option.bg,
                        }}
                  >
                        <div className="data-flex0">
                              <h2
                                    style={{
                                          color: option.syntax,
                                          marginBottom: "0",
                                          marginTop: "0",
                                    }}
                              >
                                    Data
                              </h2>
                              <h3
                                    style={{
                                          color: option.syntax,
                                          fontWeight: "600",
                                          fontSize: "25px",
                                    }}
                              >
                                    Epidémie de COVID-19
                              </h3>
                        </div>
                        <div
                              className="data-flex1"
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
                        </div>
                        <div
                              className="data-flex2"
                              style={
                                    {
                                          // height: height * 0.9,
                                          // marginBottom: "20px",
                                    }
                              }
                        >
                              <div className="graph-comment1">
                                    <h5
                                          className=""
                                          style={{
                                                color: option.syntax,
                                                width: "100%",
                                                // fontWeight: "bold",
                                                marginLeft: "0",
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

                                                            color:
                                                                  option.syntax,
                                                            fontFamily:
                                                                  "Roboto",
                                                      }}
                                                >
                                                      Nombre de personnes
                                                      hospitalisées pour cause
                                                      de COVID-19 :{" "}
                                                      {dataHToDisplay && (
                                                            <code
                                                                  style={{
                                                                        fontWeight:
                                                                              "bold",
                                                                  }}
                                                            >
                                                                  {
                                                                        dataHToDisplay
                                                                  }
                                                            </code>
                                                      )}
                                                </p>

                                                <p
                                                      style={{
                                                            marginBottom: 5,
                                                            color:
                                                                  option.syntax,
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
                                                                  {
                                                                        dataRToDisplay
                                                                  }
                                                            </code>
                                                      )}
                                                </p>
                                                <p
                                                      style={{
                                                            color:
                                                                  option.syntax,
                                                            marginBottom: 5,
                                                      }}
                                                >
                                                      Nombre de personnes
                                                      décédées depuis le début
                                                      de l'épidémie :{" "}
                                                      {dataDToDisplay && (
                                                            <code
                                                                  style={{
                                                                        fontWeight:
                                                                              "bold",
                                                                  }}
                                                            >
                                                                  {
                                                                        dataDToDisplay
                                                                  }
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
                                                Personnes actuellement
                                                hospitalisées:
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
                                                Personnes actuellement en
                                                réanimation:
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
                        <div
                              className="data-flex3 remove414 "
                              style={{
                                    height: "100%",
                                    marginBottom: "20px",
                              }}
                        >
                              <ReactVisChartAllDept
                                    className="remove414"
                                    data={dataUpdated}
                              />
                        </div>

                        <div
                              className="data-flex4"
                              style={{
                                    height: "100%",
                                    marginBottom: "20px",
                              }}
                        >
                              <ReactVisChart data={dataUpdated} />
                              {/* <CovidChartScreen data={dataUpdated} /> */}
                        </div>
                        <div
                              className="data-flex5"
                              style={{
                                    height: "100%",
                                    marginBottom: "20px",
                              }}
                        >
                              <h5
                                    style={{
                                          color: option.syntax,
                                          fontSize: "18px",
                                    }}
                              >
                                    Impact de l'épidémie selon l'âge
                              </h5>
                              <div className="select-info">
                                    <h5 style={{ color: option.syntax }}>
                                          Afficher les données par région:
                                    </h5>
                                    <select
                                          className="select"
                                          style={{
                                                width: "165px",
                                                marginBottom: "20px",
                                          }}
                                          onChange={(event) => {
                                                setRegSelected(
                                                      event.target.value
                                                );
                                          }}
                                    >
                                          {options}
                                    </select>
                              </div>
                              <div className="chart-age-container">
                                    <div className="chart-age-box">
                                          <COVIDageBar
                                                data={dataDCTodisplay}
                                                type="Décès"
                                          />
                                    </div>
                                    <div className="chart-age-box">
                                          <COVIDageBar
                                                data={dataHTodisplay}
                                                type="Patients hospitalisés"
                                          />
                                    </div>
                                    <div className="chart-age-box">
                                          <COVIDageBar
                                                data={dataRTodisplay}
                                                type="Patients en réanimation"
                                          />
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
