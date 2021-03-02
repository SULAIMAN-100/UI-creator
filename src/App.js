import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import PatternsPage from "./components/PatternsPage";
import "./App.css";
import { SinglePattern } from "./components/SinglePattern";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/select" component={PatternsPage} />
          <SinglePattern path="/single-pattern" component={SinglePattern} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
