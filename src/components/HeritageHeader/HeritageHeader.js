import React from "react";
import styles from "./HeritageHeader.module.css";
import Logo from "../Logo/Logo";
import broadcastIcon from "../../images/broadcast.svg";
import menuIcon from "../../images/menu.svg";
import { Link } from "react-router-dom";

import MediaQuery from 'react-responsive';

const HeritageHeader = (props) => {
  return (
    <div className={styles.HeritageHeader}>
      <MediaQuery maxWidth={768}>
        <Link to="/broadcast">
          <img src={broadcastIcon} alt="broadcast" />
        </Link>
        <Link to="/">
          <Logo />
        </Link>
        <img src={menuIcon} alt="menu" />
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <h1>{props.title}</h1>
        {props.icon ? (
          <img src={props.icon} alt=""/>
        ) : null}
      </MediaQuery>
    </div>
  );
};

export default HeritageHeader;
