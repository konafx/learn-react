import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import 'bulma/css/bulma.min.css';

const Game = lazy(() => import('./pages/tic-tac-toe'));
const Temp = lazy(() => import('./pages/temp'));

const Loading = () => {
  return <p>loading...</p>;
};

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
      <Suspense fallback={Loading}>
        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/temp">
            <Temp />
          </Route>
          <Route path="/">
            <Game />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
