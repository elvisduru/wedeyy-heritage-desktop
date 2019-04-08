import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Explore from "./Heritage/Explore/Explore";
import Drawer from "./components/Drawer/Drawer";
import Feeds from "./Heritage/Feeds/Feeds";
import Notifications from "./Heritage/Notifications/Notifications";
import Profile from "./Heritage/Profile/Profile";
import BroadCast from "./components/BroadCast/BroadCast";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Feeds} />
          <Route path="/explore" component={Explore} />
          <Route path="/profile" component={Profile} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/broadcast" component={BroadCast} />
          <Redirect to="/" />
        </Switch>
        <Drawer />
      </BrowserRouter>
    );
  }
}

export default App;
