import React from "react";
import styles from "./Friends.module.css";
import SearchBar from "../../../components/SearchBar/SearchBar";
import FriendList from "../../../components/FriendList/FriendList";

const Friends = () => {
  return (
    <div className={styles.Friends}>
      <SearchBar placeholder="Find Friends" />
      <FriendList />
    </div>
  );
};

export default Friends;
