import React from "react";
import styles from "./NavHeader.module.css";
import backIcon from "../../images/go-back-left-arrow.svg";
import menuIcon from "../../images/menu.svg";

const NavHeader = props => {
  return (
    <div className={styles.NavHeader}>
      <div>
        <img src={backIcon} alt="go-back" />
        <h2>{props.heading}</h2>
      </div>
      <img src={menuIcon} alt="menu" />
    </div>
  );
};

export default NavHeader;
