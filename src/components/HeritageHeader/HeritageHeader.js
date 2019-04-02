import React from "react";
import styles from "./HeritageHeader.module.css";
import Logo from "../Logo/Logo";
import broadcastIcon from "../../images/broadcast.svg";
import menuIcon from "../../images/menu.svg";

const HeritageHeader = props => {
  return (
    <div className={styles.HeritageHeader}>
      <a href="/">
        <img src={broadcastIcon} alt="broadcast" />
      </a>
      <a href="/">
        <Logo />
      </a>
      <img src={menuIcon} alt="menu" />
    </div>
  );
};

export default HeritageHeader;
