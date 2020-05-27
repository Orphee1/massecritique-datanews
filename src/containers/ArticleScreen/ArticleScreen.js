import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "../../App.css";
import "./style.css";

// Data import
import articles from "../../assets/data/Articles";

export default function ArticleScreen() {
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

      const [selectedTab, setSelectedTab] = useState("all");
      const [skip, setSkip] = useState(0);
      const [buttonSelected, setButtonSelected] = useState(0);

      let limit = 5;
      let limitOK = skip + 5;

      console.log("skip " + skip);
      console.log("limitOK " + limitOK);

      let articlesSelected = [];
      if (selectedTab !== "all") {
            for (let i = 0; i < articles.length; i++) {
                  if (articles[i].category === selectedTab) {
                        articlesSelected.push(articles[i]);
                  }
            }
      } else {
            articlesSelected = articles;
      } // NOPE du coup tu peux pas faire la pagination après le slice, car forcémebt, il n'y aura qu'une page.
      let tab = [];
      for (let i = 0; i < articlesSelected.length / limit; i++) {
            tab.push(i + 1);
      }
      let articlesToDisp = articlesSelected.slice(skip, limitOK);
      return (
            <div
                  className="page"
                  style={{
                        background: option.syntax,
                  }}
            >
                  <div
                        className="fl-col"
                        style={{
                              background: option.syntax,
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
                                                cursor: "pointer",
                                          }}
                                          className={
                                                selectedTab === "all"
                                                      ? selected
                                                      : "unselected"
                                          }
                                          onClick={() => {
                                                setSelectedTab("all");
                                          }}
                                    >
                                          Articles
                                    </h2>
                                    <div className="menu-article">
                                          <ul className="d-flex mini-nav">
                                                <li>
                                                      <span
                                                            className={
                                                                  selectedTab ===
                                                                  "societe"
                                                                        ? selected
                                                                        : "unselected"
                                                            }
                                                            style={{
                                                                  color:
                                                                        option.syntax,
                                                                  cursor:
                                                                        "pointer",
                                                            }}
                                                            onClick={() => {
                                                                  setSelectedTab(
                                                                        "societe"
                                                                  );
                                                            }}
                                                      >
                                                            Société
                                                      </span>
                                                </li>
                                                <li>
                                                      <span
                                                            style={{
                                                                  color:
                                                                        option.syntax,
                                                                  cursor:
                                                                        "pointer",
                                                            }}
                                                            className={
                                                                  selectedTab ===
                                                                  "eco"
                                                                        ? selected
                                                                        : "unselected"
                                                            }
                                                            onClick={() => {
                                                                  setSelectedTab(
                                                                        "eco"
                                                                  );
                                                            }}
                                                      >
                                                            Eco
                                                      </span>
                                                </li>
                                                <li>
                                                      <span
                                                            style={{
                                                                  color:
                                                                        option.syntax,
                                                                  cursor:
                                                                        "pointer",
                                                            }}
                                                            className={
                                                                  selectedTab ===
                                                                  "social"
                                                                        ? selected
                                                                        : "unselected"
                                                            }
                                                            // onClick={() => {
                                                            //       setSelectedTab(
                                                            //             "social"
                                                            //       );
                                                            // }}
                                                      >
                                                            Social
                                                      </span>
                                                </li>
                                                <li>
                                                      <span
                                                            style={{
                                                                  color:
                                                                        option.syntax,
                                                                  cursor:
                                                                        "pointer",
                                                            }}
                                                            className={
                                                                  selectedTab ===
                                                                  "cult"
                                                                        ? selected
                                                                        : "unselected"
                                                            }
                                                            // onClick={() => {
                                                            //       setSelectedTab(
                                                            //             "cult"
                                                            //       );
                                                            // }}
                                                      >
                                                            Culture
                                                      </span>
                                                </li>

                                                <li>
                                                      <span
                                                            style={{
                                                                  color:
                                                                        option.syntax,
                                                                  cursor:
                                                                        "pointer",
                                                            }}
                                                            className={
                                                                  selectedTab ===
                                                                  "afp"
                                                                        ? selected
                                                                        : "unselected"
                                                            }
                                                            onClick={() => {
                                                                  setSelectedTab(
                                                                        "afp"
                                                                  );
                                                            }}
                                                      >
                                                            AFP
                                                      </span>
                                                </li>
                                          </ul>
                                    </div>
                              </div>
                              {articlesToDisp.map((article, index) => {
                                    return (
                                          <div
                                                className="article-flex freeHeight stopWidth"
                                                key={index}
                                                style={{
                                                      backgroundImage:
                                                            "url(" +
                                                            article.image +
                                                            ")",
                                                      backgroundSize: "cover",
                                                }}
                                          >
                                                <h2>
                                                      {article.image ===
                                                      undefined ? (
                                                            <a
                                                                  href={
                                                                        article.link
                                                                  }
                                                                  style={{
                                                                        color:
                                                                              option.syntax,
                                                                  }}
                                                            >
                                                                  {
                                                                        article.title
                                                                  }
                                                            </a>
                                                      ) : (
                                                            <a
                                                                  href={
                                                                        article.link
                                                                  }
                                                            >
                                                                  {
                                                                        article.title
                                                                  }
                                                            </a>
                                                      )}
                                                </h2>
                                                {article.image === undefined ? (
                                                      <h4
                                                            className="remove414"
                                                            style={{
                                                                  color:
                                                                        option.syntax,
                                                            }}
                                                      >
                                                            {article.p}
                                                      </h4>
                                                ) : (
                                                      article.p !==
                                                            undefined && (
                                                            <h4
                                                                  className="remove414"
                                                                  style={{
                                                                        color:
                                                                              option.syntax,
                                                                        background:
                                                                              option.bg,
                                                                        padding:
                                                                              "5px",
                                                                  }}
                                                            >
                                                                  {article.p}
                                                            </h4>
                                                      )
                                                )}
                                          </div>
                                    );
                              })}
                        </div>
                        <div className="pagination-box">
                              {tab.map((page, index) => {
                                    return (
                                          <button
                                                className={
                                                      buttonSelected === index
                                                            ? "page-button-selected"
                                                            : "page-button"
                                                }
                                                key={index}
                                                onClick={() => {
                                                      setSkip(index * limit);
                                                      setButtonSelected(index);
                                                      console.log(index);
                                                }}
                                          >
                                                {page}
                                          </button>
                                    );
                              })}
                        </div>
                  </div>
            </div>
      );
}
