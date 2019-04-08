import React from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./Explore.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import menuIcon from "../../images/menu.svg";
import NavBar from "../../components/NavBar/NavBar";
import Top from "./Top/Top";
import People from "./People/People";
import Family from "./Family/Family";

const Explore = props => {
  const navList = ["Top", "People", "Family", "Tags", "Places"];
  return (
    <div className={styles.Explore}>
      <div className={styles.Header}>
        <div className={styles.Top}>
          <SearchBar placeholder="Explore Wedeyy" />
          <img src={menuIcon} alt="menu" />
        </div>
        <div className={styles.Bottom}>
          <NavBar navList={navList} />
        </div>
      </div>
      <Switch>
        <Route path="/explore/top" component={Top} />
        <Route path="/explore/people" component={People} />
        <Route path="/explore/family" component={Family} />
      </Switch>
    </div>
  );
};

export default Explore;
