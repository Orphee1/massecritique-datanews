import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

import "../../App.css";
import "./style.css";

// Image import
import graph from "../../assets/images/home/graph.png";

export default function HomeScreen() {
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
                  className="page"
                  style={{
                        background: option.syntax,
                  }}
            >
                  <div
                        className="home-container"
                        style={{
                              background: option.bg,
                        }}
                  >
                        <div className="home-flex1">
                              <div className="head-line-home">
                                    <h1>
                                          {/* Masse Critique <br /> */}
                                          Data News
                                    </h1>
                              </div>
                              <div
                                    className="vignette1"
                                    // style={{ background: option.bgClear }}
                              >
                                    <h4
                                          className="up-title"
                                          style={{
                                                textAlign: "left",

                                                color: option.syntax,
                                                borderColor: option.syntax,
                                                width: "65px",
                                                // color: option.bg,
                                          }}
                                    >
                                          Le son
                                    </h4>
                                    <Link to="/sound">
                                          <h3
                                                style={{
                                                      color: option.syntax,
                                                      // color: option.bg,
                                                }}
                                          >
                                                Adult babies
                                          </h3>
                                    </Link>
                              </div>

                              <div className="vignette2">
                                    <h4
                                          className="up-title"
                                          style={{
                                                textAlign: "left",
                                                borderColor: "#FFFFF0",
                                                width: "65px",
                                          }}
                                    >
                                          La vidéo
                                    </h4>
                                    <Link to="/video">
                                          <h3>Ombres</h3>
                                    </Link>
                              </div>
                        </div>

                        <div className="home-flex2">
                              <div className="data-home">
                                    <Link to="/data">
                                          <h3 style={{ color: option.syntax }}>
                                                Epidémie de Covid-19
                                          </h3>
                                    </Link>
                                    <h4
                                          style={{
                                                color: option.syntax,
                                                textAlign: "left",
                                          }}
                                    >
                                          Visualiser la prévalence de l'épidémie
                                          au sein de la population française,
                                          selon les régions, départements.
                                    </h4>
                                    <div className="image-data-home"></div>
                              </div>
                        </div>

                        <div className="home-flex3">
                              <Link to="article">
                                    <h3
                                          style={{
                                                // color: option.bg,
                                                color: "#fffff0",
                                          }}
                                    >
                                          La Patagonie eldorado du fracking
                                    </h3>
                              </Link>
                              <h4
                                    style={{
                                          // color: option.bg,
                                          color: "#fffff0",
                                          textAlign: "left",
                                    }}
                              >
                                    Depuis deux ans, l'exploitation de gaz et
                                    d'huile de schiste explose en Patagonie
                                    argentine.
                              </h4>
                              <p
                                    className="remove414"
                                    style={{
                                          // color: option.bg,
                                          color: "#fffff0",
                                          padding: "5px",
                                    }}
                              >
                                    C’est une vaste tache noire qui souille la
                                    steppe de la Patagonie. À Añelo, dans la
                                    province de Neuquén, sur plus de 13
                                    hectares, des résidus de l’extraction
                                    d’hydrocarbures sont déversés à même la
                                    terre creusée et au mépris de toutes les
                                    normes environnementales
                              </p>
                        </div>
                  </div>
            </div>
      );
}
