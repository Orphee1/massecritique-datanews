import React from "react";

import "../../App.css";
import "./style.css";

export default function Header() {
      return (
            <div className="header">
                  <div className="nav">
                        <ul>
                              <li>
                                    <span className="logo">
                                          Masse Critique/Data News
                                    </span>
                              </li>
                        </ul>
                        <ul className="d-flex">
                              <li>
                                    <span>Data</span>
                              </li>
                              <li>
                                    <span>Articles</span>
                              </li>
                              <li>
                                    <span>Photos/Videos</span>
                              </li>
                              <li>
                                    <span>Sounds</span>
                              </li>
                        </ul>
                  </div>
            </div>
      );
}
