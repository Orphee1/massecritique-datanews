import React, { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages import
import ArticleScreen from "./containers/ArticleScreen/ArticleScreen";
import DataScreen from "./containers/DataScreen/DataScreen";
import HomeScreen from "./containers/HomeScreen/HomeScreen";
import VideoScreen from "./containers/VideoScreen/VideoScreen";
import SoundScreen from "./containers/SoundScreen/SoundScreen";

// Components import
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Context import
import { ThemeContextProvider } from "./context/ThemeContext";
import PhotoScreen from "./containers/PhotoScreen/PhotoScreen";
import DataContextProvider from "./context/DataContext";

function App() {
      const [indexPage, setIndexPage] = useState(1);

      return (
            <Router>
                  <ThemeContextProvider>
                        <Header
                              indexPage={indexPage}
                              setIndexPage={setIndexPage}
                        />
                        <Switch>
                              <Route path="/data">
                                    <DataContextProvider>
                                          <DataScreen />
                                    </DataContextProvider>
                              </Route>
                              <Route path="/article">
                                    <ArticleScreen />
                              </Route>
                              <Route path="/video">
                                    <VideoScreen />
                              </Route>
                              <Route path="/photo">
                                    <PhotoScreen />
                              </Route>
                              <Route path="/sound">
                                    <SoundScreen />
                              </Route>

                              <Route path="/">
                                    <HomeScreen />
                              </Route>
                        </Switch>
                        <Footer />
                  </ThemeContextProvider>
            </Router>
      );
}

export default App;
