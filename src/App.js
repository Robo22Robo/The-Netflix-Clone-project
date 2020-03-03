import React, { useState, useEffect, useContext } from 'react';
import Home from './components/pages/Home'
import Series from './components/pages/Series'
import Season from './components/pages/Season'
import './App.scss';
/* Libraries */
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Router>
            <div>
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <NavLink className="nav-link" exact activeClassName="active" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/series">Series</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/season">Season</NavLink>
                </li>
              </ul>
            </div>
            <Switch>
              <Route exact path="/" >
                <Home />
              </Route>
              <Route path="/series" component={Series} />

              <Route path="/serie/:serieId/season/:seasonId" component={Season} />
              <Route path="*" render={
                () => <div>404 - Not found</div>}
              />
            </Switch>
          </Router>
        </div>
      </header>
    </div>
  );
}

export default App;
