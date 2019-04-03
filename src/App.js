import React, { Component, Fragment } from "react";
import "./App.css";
// import Explore from "./Heritage/Explore/Explore";
import Drawer from "./components/Drawer/Drawer";
// import Feeds from "./Heritage/Feeds/Feeds";

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <Feeds /> */}
        {/* <Explore /> */}
        <Drawer />
      </Fragment>
    );
  }
}

export default App;
