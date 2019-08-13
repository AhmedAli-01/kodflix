import React from "react";
import Gallery from "./Gallery";
import Details from "./Details";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Gallery} />
        <Route exact path="/details" component={Details} />
        <Link to='details'> go to Gallery</Link>
      </div>
    </Router>
  );
}
export default App;
