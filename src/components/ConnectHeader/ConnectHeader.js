import React from "react";
import styles from "./ConnectHeader.module.css";
import logo from "../../images/Wedeyy Connect.png";
import menuIcon from "../../images/menu.svg";

const ConnectHeader = () => {
  return (
    <div className={styles.ConnectHeader}>
      <img src={logo} alt="Wedeyy" />
    </div>
  );
};

export default ConnectHeader;
