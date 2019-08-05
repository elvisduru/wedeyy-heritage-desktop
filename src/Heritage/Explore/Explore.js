import React from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./Explore.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import menuIcon from "../../images/menu.svg";
import NavBar from "../../components/NavBar/NavBar";
import Top from "./Top/Top";
import People from "./People/People";
import Family from "./Family/Family";

import MediaQuery from 'react-responsive';
import SimpleBar from 'simplebar-react';

import 'simplebar/dist/simplebar.min.css';
import SuggestionList from "../../components/SuggestionList/SuggestionList";


const Explore = props => {
  const navList = ["Top", "People", "Family", "Tags", "Places"];
  return (
    <div className={styles.Explore}>
      <div className={styles.Header}>
        <div className={styles.Top}>
          <SearchBar placeholder="Explore Wedeyy" />
          <MediaQuery maxWidth={768}>
            <img src={menuIcon} alt="menu" />
          </MediaQuery>
        </div>
        <div className={styles.Bottom}>
          <NavBar navList={navList} />
        </div>
      </div>
      <MediaQuery maxWidth={768}>
        <Switch>
          <Route path="/explore/top" component={Top} />
          <Route path="/explore/people" component={People} />
          <Route path="/explore/family" component={Family} />
        </Switch>
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <div>
          <SimpleBar style={{
            width: '51%',
            height: '100vh'
          }}>
            <Switch>
              <Route path="/explore/top" component={Top} />
              <Route path="/explore/people" component={People} />
              <Route path="/explore/family" component={Family} />
            </Switch>
          </SimpleBar>
          <SimpleBar style={{
            flex: '1 0 50%',
            borderLeft: '1px solid #e6ecf0',
            backgroundColor: 'white',
            position: 'fixed',
            right: 0,
            top: 0,
            width: '37%',
            height: '100%'
          }}>
            <SuggestionList />
          </SimpleBar>
        </div>
      </MediaQuery>
    </div>
  );
};

export default Explore;
