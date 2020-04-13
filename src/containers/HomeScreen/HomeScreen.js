import React from "react";

import "../../App.css";
import "./style.css";

// Image import
import graph from "../../images/home/graph.png";

export default function HomeScreen() {
      return (
            <div className="page">
                  <div className="home-container">
                        <div className="home-flex1">
                              <h1>
                                    Masse Critique <br />
                                    /Data News
                              </h1>
                        </div>
                        <div className="home-flex2">
                              <h3>Solar production growth</h3>
                              <h4>
                                    Chapeau destiné à présenter la production
                                    mise en valeur en home
                              </h4>
                              <img
                                    className="image-headline-prod"
                                    src={graph}
                                    alt="chart"
                              ></img>
                        </div>
                  </div>
            </div>
      );
}
