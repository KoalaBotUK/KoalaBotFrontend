import React from "react";
import "./styling/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Base from "./components/Base";
import Home from "./components/Home";
import Verify from "./components/Verify";
import SocialAlert from "./components/SocialAlert";
import Settings from "./components/Settings";
import TwitchAlert from "./components/TwitchAlert";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Base>
            <Home />
          </Base>
        </Route>
        <Route path="/settings">
          <Base>
            <Settings />
          </Base>
        </Route>
        <Route path="/verify">
          <Base>
            <Verify />
          </Base>
        </Route>
        <Route path="/twitch">
          <Base>
            <TwitchAlert />
          </Base>
        </Route>
        <Route path="/socialalert">
          <Base>
            <SocialAlert />
          </Base>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
