import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Game from "./pages/tic-tac-toe";
import Temp from "./pages/temp";

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/game">
              三目並べ
            </Link>
            <Link className="navbar-item" to="/temp">
              温度計
            </Link>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/temp">
          <Temp />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
