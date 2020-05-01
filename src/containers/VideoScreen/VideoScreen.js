import React, { useContext, useState } from "react";
import ReactPlayer from "react-player";

import { ThemeContext } from "../../context/ThemeContext";

import "../../App.css";
import "./style.css";

// import tango from "../../videos/Tango.mp4";

export default function VideoScreen() {
      // Theme definition
      const [theme] = useContext(ThemeContext);
      const { themeSelected, themeOne, themeTwo, themeThree } = theme;
      let option;
      let selected;
      switch (themeSelected) {
            case "theme1":
                  option = themeOne;
                  selected = "selected1";
                  break;
            case "theme2":
                  option = themeTwo;
                  selected = "selected2";
                  break;
            case "theme3":
                  option = themeThree;
                  selected = "selected3";
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
                        className="video-container green"
                        style={{ background: option.bg }}
                  >
                        <div className="video-flex0">
                              <h2
                                    style={{
                                          color: option.syntax,
                                    }}
                              >
                                    Vidéos
                              </h2>
                        </div>
                        <div className="video-flex1">
                              <div className="player-container">
                                    <ReactPlayer
                                          className="react-player2"
                                          controls={true}
                                          light={true}
                                          width="100%"
                                          height="100%"
                                          url="https://www.youtube.com/watch?v=Mv-y4meRSf4&t=97s"
                                    />
                              </div>
                              <div className="video-info">
                                    <h5 style={{ color: option.syntax }}>
                                          Résidence de création de Karen Ramage,
                                          metteure en scène et Léa Debenedetti,
                                          marionnetiste, au Théâtre aux Mains
                                          Nues, à Paris. Vidéo réalisée en
                                          juillet 2019. Boîtier: Panasonic GH4.
                                          Micros: Sennheiser XSW-D. Montage:
                                          Premiere Pro.
                                    </h5>
                              </div>
                        </div>
                        <div className="video-flex2">
                              <div className="player-container">
                                    <ReactPlayer
                                          className="react-player"
                                          controls={true}
                                          width="100%"
                                          height="100%"
                                          url="https://www.youtube.com/watch?v=1ii5G0Vltn8&list=RD1ii5G0Vltn8&index=1"
                                    />
                              </div>
                              <div className="video-info">
                                    <h5 style={{ color: option.syntax }}>
                                          Milonga un jour de canicule animée par
                                          Philippe Stainvurcel, au Caminito,
                                          lieu dédié au tango dans le 11e
                                          arrondissement, à Paris. Vidéo
                                          réalisée en juin 2019. Camera: Canon
                                          XF100. Micros: Sennheiser XSW-D.
                                          Montage: Final Cut Pro.
                                    </h5>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
