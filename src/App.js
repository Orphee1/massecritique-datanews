import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages import
import HomeScreen from "./containers/HomeScreen/HomeScreen";

// Components import
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
      return (
            <Router>
                  <Header />
                  <Switch>
                        <Route path="/">
                              <HomeScreen />
                        </Route>
                  </Switch>
                  <Footer />
            </Router>
      );
}

export default App;
