import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import "../../App.css";
import "./style.css";
import useWindowDimensions from "../../assets/useWindowDimension";

// Image import
import graph from "../../images/home/graph.png";

export default function HomeScreen() {
      const { width, height } = useWindowDimensions();

      // Theme definition
      const [theme, setTheme] = useContext(ThemeContext);
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
                                          Masse Critique <br />
                                          /Data News
                                    </h1>
                              </div>
                              {/* <div className="article-home">
                                    <h3 style={{ color: option.syntax }}>
                                          Article mis en home
                                    </h3>
                                    <h4 style={{ color: option.syntax }}>
                                          Chapeau destiné à présenter l'article
                                          mise en valeur en home avec un lien
                                          qui renvoie vers la page article et
                                          plein de détails à l'intérieur juste
                                          pour remplir cet espace qui sera
                                          ensuite un composant.
                                    </h4>
                              </div> */}
                        </div>
                        <div className="home-flex2">
                              <div className="data-home">
                                    <h3 style={{ color: option.syntax }}>
                                          Epidémie de Covid-19
                                    </h3>
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
                                    {/* <img
                                          className="image-data-home"
                                          src={graph}
                                          alt="chart"
                                    ></img> */}
                              </div>
                        </div>
                        <div className="home-flex3">
                              <h3 style={{ color: option.syntax }}>
                                    La Patagonie eldorado du fracking
                              </h3>
                              <h4
                                    style={{
                                          color: option.syntax,
                                          textAlign: "left",
                                    }}
                              >
                                    Depuis deux ans, l'exploitation de gaz et
                                    d'huile de schiste explose en Patagonie
                                    argentine.
                              </h4>
                              <p
                                    style={{
                                          color: option.syntax,
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
