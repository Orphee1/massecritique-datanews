import React, { useState, useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

import "../../App.css";
import "./style.css";

// Component import
import VXLinepath from "../VXTools/VXLinepath";

export default function VXPage() {
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
            <div className="data-vx-flex1 ">
                  <h5
                        style={{
                              color: option.syntax,
                              fontSize: "18px",
                        }}
                  >
                        Nouveaux cas quotidiens depuis le 19 mars
                  </h5>
                  <h5 style={{ color: option.syntax }}>
                        Ensemble du territoire
                  </h5>
                  <VXLinepath />
            </div>
      );
}
