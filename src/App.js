import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Game from "./pages/tic-tac-toe";
import Temp from "./pages/temp";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/game">三目並べ</Link>
          </li>
          <li>
            <Link to="/temp">温度計</Link>
          </li>
        </ul>
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
