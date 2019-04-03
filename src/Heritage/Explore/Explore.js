import React from "react";
import styles from "./Explore.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import menuIcon from "../../images/menu.svg";
import NavBar from "../../components/NavBar/NavBar";
import Top from "./Top/Top";

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
      <Top />
    </div>
  );
};

export default Explore;
