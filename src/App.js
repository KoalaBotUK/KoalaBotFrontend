import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Base from "./components/Base";
import Dashboard from "./components/Dashboard";
import Verify from "./components/Verify";
import SocialAlert from "./components/SocialAlert";
import Settings from "./components/Settings";
import TwitchAlert from "./components/TwitchAlert";
import Landing from "./components/Landing";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/dashboard">
          <Base>
            <Dashboard />
          </Base>
        </Route>
        <Route path="/dashboard/settings">
          <Base>
            <Settings />
          </Base>
        </Route>
        <Route exact path="/dashboard/verify">
          <Base>
            <Verify />
          </Base>
        </Route>
        <Route path="/dashboard/twitch">
          <Base>
            <TwitchAlert />
          </Base>
        </Route>
        <Route path="/dashboard/socialalert">
          <Base>
            <SocialAlert />
          </Base>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
