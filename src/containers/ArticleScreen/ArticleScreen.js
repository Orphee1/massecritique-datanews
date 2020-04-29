import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "../../App.css";
import "./style.css";

// Data import
import articles from "../../assets/data/Articles";

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
                                    <ul className="d-flex mini-nav">
                                          <li>
                                                <span
                                                      style={{
                                                            color:
                                                                  option.syntax,
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
                                                      }}
                                                >
                                                      Social
                                                </span>
                                          </li>
                                          <li>
                                                <span
                                                      style={{
                                                            color:
                                                                  option.syntax,
                                                      }}
                                                >
                                                      Culture
                                                </span>
                                          </li>

                                          <li>
                                                <span
                                                      style={{
                                                            color:
                                                                  option.syntax,
                                                      }}
                                                >
                                                      AFP
                                                </span>
                                          </li>
                                    </ul>
                              </div>
                        </div>
                        {articles.map((article, index) => {
                              return (
                                    <div
                                          className="article-flex freeHeight"
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
                                                {article.image === undefined ? (
                                                      <a
                                                            href={article.link}
                                                            style={{
                                                                  color:
                                                                        option.syntax,
                                                            }}
                                                      >
                                                            {article.title}
                                                      </a>
                                                ) : (
                                                      <a href={article.link}>
                                                            {article.title}
                                                      </a>
                                                )}
                                          </h2>
                                          {article.image === undefined ? (
                                                <h4
                                                      style={{
                                                            color:
                                                                  option.syntax,
                                                      }}
                                                >
                                                      {article.p}
                                                </h4>
                                          ) : (
                                                article.p !== undefined && (
                                                      <h4
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
            </div>
      );
}
