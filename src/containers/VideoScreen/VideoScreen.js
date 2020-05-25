import React, { useContext, useState } from "react";
import ReactPlayer from "react-player";

import { ThemeContext } from "../../context/ThemeContext";

import "../../App.css";
import "./style.css";

export default function VideoScreen() {
      const [watchComplete, setWatchComplete] = useState(false);
      console.log(watchComplete);
      const handleWatchComplete = ({ played }) => {
            console.log(played);
            if (played >= 0.9 && !watchComplete) {
                  setWatchComplete(true);
            }
      };
      const [watchCompleteBis, setWatchCompleteBis] = useState(false);
      const handleWatchCompleteBis = ({ played }) => {
            console.log(played);
            if (played >= 0.9 && !watchCompleteBis) {
                  setWatchCompleteBis(true);
            }
      };
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
                        className="video-container"
                        style={{
                              background: option.bg,
                        }}
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
                                          // light={true}
                                          width="100%"
                                          height="100%"
                                          url="https://www.youtube.com/watch?v=Mv-y4meRSf4"
                                          onProgress={handleWatchComplete}
                                    />
                              </div>
                              <div
                                    className={
                                          watchComplete
                                                ? "video-info-complete"
                                                : "video-info"
                                    }
                              >
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
                  </div>
            </div>
      );
}
