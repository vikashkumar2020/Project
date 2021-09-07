import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home";
import Signup from "./Components/signup";
import './App.css';

function App() {
  return (
    <Router>
      <div className="container-div">
        <nav className="nav-bar">
          <div>
            <Link to="/" className="link">Home</Link>
          </div>
          <div>
            <Link to="/signup" className="link">Signup</Link>
          </div>
        </nav>

        <Switch>
        <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/signup" exact>
            <Signup/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
