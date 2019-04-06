import React, { Component, Fragment } from "react";
import "./App.css";
// import Explore from "./Heritage/Explore/Explore";
import Drawer from "./components/Drawer/Drawer";
// import Feeds from "./Heritage/Feeds/Feeds";
// import Notifications from "./Heritage/Notifications/Notifications";
import Profile from "./Heritage/Profile/Profile";

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <Feeds /> */}
        {/* <Explore /> */}
        {/* <Notifications /> */}
        <Profile />
        <Drawer />
      </Fragment>
    );
  }
}

export default App;
