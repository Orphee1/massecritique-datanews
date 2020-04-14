import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import "../../App.css";
import "./style.css";

// Image import
import France from "../../images/data/France.png";

export default function DataScreen() {
      // Theme definition
      const [theme, setTheme] = useContext(ThemeContext);
      let { isLigthTheme, light, dark } = theme;
      const option = isLigthTheme ? light : dark;
      return (
            <div className="page" style={{ background: option.bg }}>
                  <div className="data-container">
                        <div className="data-flex1">
                              <div className="graph-covid-france-map">
                                    <img className="France" src={France} />
                              </div>
                        </div>
                        <div className="data-flex2">
                              <div className="data-covid">
                                    <h4>Données au 13 avril: </h4>
                                    <span>Source: data.gouv.fr</span>
                                    <span>Total national</span>
                                    <span>
                                          Nombre de personnes hospitalisées:
                                          35000
                                    </span>
                                    <span>
                                          Nombre de personnes hospitalisées:
                                          35000
                                    </span>
                                    <span>
                                          Nombre de personnes hospitalisées:
                                          35000
                                    </span>
                                    <span>
                                          Nombre de personnes hospitalisées:
                                          35000
                                    </span>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
