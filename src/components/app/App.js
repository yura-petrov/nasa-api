import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import WeatherPosts from '../WeatherPosts/WeatherPosts';
import NotFound from '../NotFound/NotFound';
import Test from '../Test/Test';

const App = () => (
  <div className="app">
    <Router>
      <Switch>
        <Route exact path="/weather">
          <WeatherPosts />
        </Route>
        <Route exact path="/">
          <Link to="/weather" className="btn">
            Weather
          </Link>
          <img
            src="https://i.ibb.co/PQFQxLP/astronauts-space-ships.jpg"
            className="img"
            alt="astronaut"
          />
        </Route>
        <Route exact path="/test">
          <Test />
        </Route>
        <Route exact>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
