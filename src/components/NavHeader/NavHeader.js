import React from "react";
import styles from "./NavHeader.module.css";
import backIcon from "../../images/go-back-left-arrow.svg";
import { Link } from "react-router-dom";

const NavHeader = props => {
  return (
    <div className={styles.NavHeader}>
      <div>
        {props.click ? (
          <img src={backIcon} alt="go-back" onClick={props.click} />
        ) : (
          <Link to="/">
            <img src={backIcon} alt="go-home" />
          </Link>
        )}
        <h2>{props.heading}</h2>
      </div>
    </div>
  );
};

export default NavHeader;
