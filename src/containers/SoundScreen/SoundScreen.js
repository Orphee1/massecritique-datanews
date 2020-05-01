import React, { useState, useContext } from "react";
import ReactPlayer from "react-player";
import { ThemeContext } from "../../context/ThemeContext";
import "../../App.css";
import "./style.css";

// import adult from "../../assets/sounds/adult.mp3";
// import silence from "../../assets/sounds/silence.mp3";
// import police from "../../assets/sounds/police.m4a";

export default function SoundScreen() {
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
                        className="sound-container"
                        style={{ background: option.bg }}
                  >
                        <div className="sound-flex0">
                              <h2
                                    style={{
                                          color: option.syntax,
                                    }}
                              >
                                    Sons
                              </h2>
                        </div>
                        <div className="sound-flex">
                              <div className="sound-player-container">
                                    <h3 style={{ color: option.syntax }}>
                                          La police de l'amour
                                    </h3>
                                    <ReactPlayer
                                          className="react-player-sound"
                                          controls={true}
                                          width="100%"
                                          height="100%"
                                          type="mp3"
                                          // url={police}
                                          url="https://www.youtube.com/watch?v=t2Eb8YNmSoM&list=LL23IMwRFgwTSET1CeBlThig&index=2&t=0s"
                                    />
                              </div>
                              <div className="bloc-sound-info fl-col">
                                    <h4
                                          className=""
                                          style={{
                                                color: option.syntax,
                                                marginLeft: "5px",
                                          }}
                                    >
                                          Documentaire réalisé pour l'émission
                                          Sur les docks, sur France Culture,
                                          diffusé en septembre 2010.
                                    </h4>
                                    <p
                                          className="info"
                                          style={{ color: option.syntax }}
                                    >
                                          Parce que les mariages entre Français
                                          et étrangers sont une des principales
                                          portes d'entrée de l'immigration en
                                          France, la puissance publique veille
                                          au grain. Ce documentaire suit dans
                                          ses enquêtes une jeune lieutenante de
                                          police du commissariat de Meaux, en
                                          Seine-et-Marne, chargée de discerner
                                          entre sincère volonté d'union et
                                          mariage blanc.
                                    </p>
                              </div>
                        </div>
                        <div className="sound-flex">
                              <div className="sound-player-container">
                                    <h3 style={{ color: option.syntax }}>
                                          Adult babies
                                    </h3>
                                    <ReactPlayer
                                          className="react-player-sound"
                                          controls={true}
                                          width="100%"
                                          height="100%"
                                          type="mp3"
                                          // url={adult}
                                          url="https://www.mixcloud.com/hugo-lattard/adult-babies/"
                                    />
                              </div>
                              <div className="bloc-sound-info">
                                    <h4
                                          className=""
                                          style={{
                                                color: option.syntax,

                                                marginLeft: "5px",
                                          }}
                                    >
                                          Documentaire réalisé pour{" "}
                                          <a
                                                style={{
                                                      color: option.syntax,
                                                }}
                                                href="https://www.arteradio.com/son/616021/adult_babies"
                                          >
                                                Arteradio
                                          </a>
                                          , mis en ligne le 15 novembre 2011.
                                    </h4>
                                    <p
                                          className="info"
                                          style={{ color: option.syntax }}
                                    >
                                          Perla a ouvert en région parisienne
                                          une nurserie pour 'adult baby'. Des
                                          hommes qui viennent de loin pour
                                          régresser entre ses bras. Durant
                                          quelques heures ou quelques jours, ils
                                          portent des couches-culottes, sont
                                          changés sur une table à langer,
                                          mangent à la petite cuillère, font des
                                          jeux de construction... Frédéric (son
                                          prénom a été modifié) a choisi le
                                          programme 'Bout d'chou' week-end.
                                    </p>
                              </div>
                        </div>
                        <div className="sound-flex">
                              <div className="sound-player-container">
                                    <h3
                                          style={{
                                                color: option.syntax,
                                                marginLeft: "5px",
                                          }}
                                    >
                                          Un cercle de silence
                                    </h3>
                                    <ReactPlayer
                                          className="react-player-sound"
                                          controls={true}
                                          width="100%"
                                          height="100%"
                                          type="mp3"
                                          // url={silence}
                                          url="https://soundcloud.com/hugo-lattard/pas-un-bruit-pour-les-sans-papiers"
                                          // url="https://www.youtube.com/watch?v=t2Eb8YNmSoM&list=LL23IMwRFgwTSET1CeBlThig&index=2&t=0s"
                                    />
                              </div>
                              <div className="bloc-sound-info">
                                    <h4
                                          className=""
                                          style={{
                                                color: option.syntax,

                                                marginLeft: "5px",
                                          }}
                                    >
                                          Documentaire réalisé pour{" "}
                                          <a
                                                style={{ color: option.syntax }}
                                                href="https://www.arteradio.com/son/615906/un_cercle_de_silence"
                                          >
                                                Arteradio
                                          </a>
                                          , mis en ligne le 11 janvier 2011.
                                    </h4>
                                    <p
                                          className="info"
                                          style={{ color: option.syntax }}
                                    >
                                          Initiés par les frères franciscains de
                                          Toulouse en 2007, les Cercles de
                                          silence ont essaimé dans plus d'une
                                          centaine de villes en France. Chaque
                                          mois, les participants forment un
                                          cercle pour protester contre les
                                          politiques restrictives d'immigration
                                          et le sort fait aux migrants sans
                                          papier en Europe.
                                    </p>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
