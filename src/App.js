import React, { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages import
import HomeScreen from "./containers/HomeScreen/HomeScreen";

import DataScreen from "./containers/DataScreen/DataScreen";

// Components import
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Context import
import { ThemeContextProvider } from "./context/ThemeContext";
import { DataContextProvider } from "./context/DataContext";

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
                              <DataContextProvider>
                                    <Route path="/data">
                                          <DataScreen />
                                    </Route>
                              </DataContextProvider>
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
