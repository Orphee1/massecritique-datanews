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
                        <div
                              className="home-flex1"
                              style={{
                                    height: height * 0.9,
                                    marginBottom: "20px",
                              }}
                        >
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
                        <div
                              className="home-flex2"
                              style={{
                                    height: height * 0.9,
                                    marginBottom: "20px",
                              }}
                        >
                              <div className="data-home">
                                    <h3 style={{ color: option.syntax }}>
                                          Solar production growth
                                    </h3>
                                    <h4
                                          style={{
                                                color: option.syntax,
                                          }}
                                    >
                                          Chapeau destiné à présenter la
                                          production mise en valeur en home
                                    </h4>
                                    <div className="image-data-home"></div>
                                    {/* <img
                                          className="image-data-home"
                                          src={graph}
                                          alt="chart"
                                    ></img> */}
                              </div>
                        </div>
                        <div
                              className="home-flex3"
                              style={{
                                    height: height * 0.9,
                                    marginBottom: "20px",
                              }}
                        >
                              <h3 style={{ color: option.syntax }}>
                                    Autre prod mise en home
                              </h3>
                              <h4
                                    style={{
                                          color: option.syntax,
                                    }}
                              >
                                    Encore un chapeau destiné à présenter une
                                    production mise en valeur en home
                              </h4>
                              <p style={{ color: option.syntax }}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Morbi ullamcorper tincidunt
                                    lectus, finibus gravida sem maximus vitae.
                                    Pellentesque habitant morbi tristique
                                    senectus et netus et malesuada fames ac
                                    turpis egestas. Praesent orci arcu,
                                    pellentesque quis erat sit amet, cursus
                                    ultricies augue. Donec tempor imperdiet
                                    laoreet. Donec porta urna vel imperdiet
                                    mattis. Nulla a justo tellus. Cras lacinia
                                    ante et vehicula rhoncus.
                              </p>
                        </div>
                  </div>
            </div>
      );
}
