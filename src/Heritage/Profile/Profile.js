import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import styles from "./Profile.module.css";
import Wall from "./Wall/Wall";
import StarRatingComponent from "react-star-rating-component";
import About from "./About/About";
import Friends from "./Friends/Friends";
import Tree from "./Tree/Tree";
import Album from "./Album/Album";
import HeritageHeader from "../../components/HeritageHeader/HeritageHeader";

import SimpleBar from 'simplebar-react';

import 'simplebar/dist/simplebar.min.css';
import SuggestionList from "../../components/SuggestionList/SuggestionList";

const Profile = () => {
  return (
    <div className={styles.Profile}>
      <SimpleBar style={{
        width: '50%',
        height: '100vh',
        zIndex: 101
      }}>
      <HeritageHeader title="Kehinde Omotoso" />
      <div>
        <div
          className={styles.Header}
          style={{ backgroundImage: `url(http://i.pravatar.cc/400)` }}
        >
          <div className={styles.Top}>
            <div>
              <h4>Kehinde John Omotoso</h4>
              <StarRatingComponent
                name="rate"
                editing={false}
                starCount={5}
                value={3}
                starColor="#ffffff"
              />
            </div>
            <button>Unfollow</button>
          </div>
          <div className={styles.Bottom}>
            <ul>
              <li>
                <NavLink to="/profile/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/profile/friends">Friends (290)</NavLink>
              </li>
              <li>
                <NavLink to="/profile/wall">Wall</NavLink>
              </li>
              <li>
                <NavLink to="/profile/tree">Tree</NavLink>
              </li>
            </ul>
          </div>
          <img src="http://i.pravatar.cc/100" alt="" />
        </div>
      </div>
      <Switch>
        <Route path="/profile/wall" component={Wall} />
        <Route path="/profile/friends" component={Friends} />
        <Route path="/profile/about" component={About} />
        <Route path="/profile/tree" component={Tree} />
        <Route path="/profile/album" component={Album} />
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
  );
};

export default Profile;
