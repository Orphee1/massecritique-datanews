import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "../../App.css";
import "./style.css";

export default function ArticleScreen() {
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
                        marginTop: "60px",
                  }}
            >
                  <div
                        className="article-container"
                        style={{
                              background: option.bg,
                        }}
                  >
                        <div className="article-flex0">
                              <h2
                                    style={{
                                          color: option.syntax,
                                          marginBottom: "0",
                                          // fontWeight: "900",
                                    }}
                              >
                                    Articles
                              </h2>
                              <div className="menu-article">
                                    <ul className="d-flex">
                                          <li>
                                                <span>Société</span>
                                          </li>
                                          <li>
                                                <span>Eco</span>
                                          </li>
                                          <li>
                                                <span>Social</span>
                                          </li>
                                          <li>
                                                <span>Culture</span>
                                          </li>

                                          <li>
                                                <span>AFP</span>
                                          </li>
                                    </ul>
                              </div>
                        </div>
                        <div className="article-flex1 freeHeight">
                              <div className="article-title">
                                    <h2>
                                          <a href="https://reporterre.net/En-Argentine-la-Patagonie-est-le-nouvel-eldorado-du-gaz-de-schiste">
                                                La Patagonie est le nouvel
                                                Eldorado du gaz de schiste
                                          </a>
                                    </h2>
                                    <h4
                                          style={{
                                                background: option.bg,
                                                color: option.syntax,
                                                padding: "5px",
                                          }}
                                    >
                                          Depuis deux ans, l’exploitation des
                                          gaz et huile de schiste explose en
                                          Patagonie argentine. Tous les majors
                                          du secteur, y compris Total, sont
                                          présents.
                                    </h4>
                              </div>
                        </div>
                        <div className="article-flex2 freeHeight">
                              <h3
                                    style={{
                                          color: option.syntax,
                                          textAlign: "right",
                                    }}
                              >
                                    <a
                                          style={{ color: option.syntax }}
                                          href="http://www.millebabords.org/spip.php?article16089"
                                    >
                                          L'Europe verrouille les frontières de
                                          l'Afrique
                                    </a>
                              </h3>
                              <h4
                                    style={{
                                          color: option.syntax,
                                          textAlign: "right",
                                    }}
                              >
                                    Après avoir fermé ses portes aux migrants,
                                    l’Europe cherche depuis quelques années à
                                    maîtriser les voies d’accès. Elle exerce de
                                    nombreuses pressions pour imposer ses
                                    politiques migratoires jusqu’aux frontières
                                    africaines et de plus en plus de pays les
                                    mettent en place.
                              </h4>
                        </div>

                        <div className="article-flex3 freeHeight">
                              <h3>
                                    <a href="https://www.lemonde.fr/societe/article/2009/06/27/de-la-courneuve-a-saint-denis-l-errance-des-roms-citoyens-europeens_1212035_3224.html">
                                          De La Courneuve à Saint-Denis,
                                          l'errance des Roms, citoyens européens
                                    </a>
                              </h3>
                        </div>
                        <div className="article-flex4 freeHeight">
                              <h3>
                                    <a href="https://www.lemonde.fr/societe/article/2009/10/14/a-mayotte-la-chasse-aux-clandestins-aggrave-leur-situation-sanitaire_1253537_3224.html">
                                          A Mayotte, la chasse aux sans-papiers
                                          aggrave leur situation sanitaire
                                    </a>
                              </h3>
                        </div>
                        <div className="article-flex5 freeHeight">
                              <h3
                                    style={{
                                          color: option.syntax,
                                    }}
                              >
                                    <a
                                          style={{ color: option.syntax }}
                                          href="https://www.lemonde.fr/societe/article/2009/12/22/les-couples-mixtes-se-heurtent-aux-entraves-des-prefectures_1282848_3224.html"
                                    >
                                          Les couples mixtes se heurtent aux
                                          entraves des préfectures
                                    </a>
                              </h3>
                              <h4
                                    style={{
                                          color: option.syntax,
                                          // textAlign: "right",
                                    }}
                              >
                                    L'association Les Amoureux au ban public
                                    dénonce les entraves opposées aux couples
                                    mixtes, quand le conjoint de Français a
                                    pourtant le droit de faire sa demande de
                                    visa en France.
                              </h4>
                        </div>
                        <div className="article-flex8 freeHeight">
                              <h3>
                                    <a
                                          // style={{ color: option.syntax }}
                                          href="https://lexpansion.lexpress.fr/actualite-economique/quelle-politique-de-relance-pour-contrer-la-crise_1372831.html"
                                    >
                                          Quelle politique de relance pour
                                          contrer la crise?
                                    </a>
                              </h3>
                              <div className="article-title">
                                    <h4
                                          style={{
                                                background: option.bg,
                                                color: option.syntax,
                                                padding: "10px",
                                          }}
                                    >
                                          Pour éviter que la récession ne
                                          dégénère en dépression, il reste
                                          l'arme d'un plan de relance. C'est une
                                          des résolutions adoptée lors du G20,
                                          réclamée avec insistance par les
                                          industriels.
                                    </h4>
                              </div>
                        </div>
                        <div className="article-flex6 freeHeight">
                              <h3>
                                    <a href="https://www.lemonde.fr/societe/article/2010/06/07/le-soutien-de-chefs-d-entreprises-aux-travailleurs-sans-papiers_1368052_3224.html">
                                          Quand les patrons soutiennent les
                                          travailleurs sans-papiers
                                    </a>
                              </h3>
                        </div>
                        <div className="article-flex7 freeHeight">
                              <h3>
                                    <a
                                          style={{ color: option.syntax }}
                                          href="https://lexpansion.lexpress.fr/actualite-economique/ce-qu-on-ne-vous-dit-jamais-sur-la-dette-de-la-france_1428192.html"
                                    >
                                          Ce qu'on ne vous dit jamais sur la
                                          dette de la France
                                    </a>
                              </h3>
                        </div>
                  </div>
            </div>
      );
}
