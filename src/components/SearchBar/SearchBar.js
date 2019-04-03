import React from "react";
import styles from "./SearchBar.module.css";
import searchIcon from "../../images/search.svg";

const SearchBar = props => {
  return (
    <div className={styles.SearchBar}>
      <input type="text" placeholder={props.placeholder} />
      <img src={searchIcon} alt="search" />
    </div>
  );
};

export default SearchBar;
