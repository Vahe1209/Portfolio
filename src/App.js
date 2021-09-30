import React from "react";
import {
  BrowserRouter as Router,
  //  Switch, Route, Link
} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
// import { homePage, aboutPage } from "./constants/routes";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <HomePage />
        {/* <nav>
          <ul>
            <li>
              <Link to={homePage}>Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Projects</Link>
            </li>
          </ul>
        </nav> */}

        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
}
