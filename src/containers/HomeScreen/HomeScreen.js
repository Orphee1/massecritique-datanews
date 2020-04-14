import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import "../../App.css";
import "./style.css";

// Image import
import graph from "../../images/home/graph.png";

export default function HomeScreen() {
      // Theme definition
      const [theme, setTheme] = useContext(ThemeContext);
      let { isLigthTheme, light, dark } = theme;
      const option = isLigthTheme ? light : dark;

      return (
            <div className="page" style={{ background: option.bg }}>
                  <div className="home-container">
                        <div className="home-flex1">
                              <div className="head-line-home">
                                    <h1>
                                          Masse Critique <br />
                                          /Data News
                                    </h1>
                              </div>
                              <div className="article-home">
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
                              </div>
                        </div>
                        <div className="home-flex2">
                              <div className="data-home">
                                    <h3 style={{ color: option.syntax }}>
                                          Solar production growth
                                    </h3>
                                    <h4 style={{ color: option.syntax }}>
                                          Chapeau destiné à présenter la
                                          production mise en valeur en home
                                    </h4>
                                    <img
                                          className="image-data-home"
                                          src={graph}
                                          alt="chart"
                                    ></img>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
