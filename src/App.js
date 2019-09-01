import React from "react";
import Gallery from "./Gallery";
import Details from "./Details";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from './NotFound';

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Gallery} />
          <Route exact path='/not-found' component={NotFound} />
          <Route exact path='/:movieId' component={Details} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
