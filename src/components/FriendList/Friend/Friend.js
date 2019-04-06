import React from "react";
import styles from "./Friend.module.css";

const Friend = props => {
  return (
    <div className={styles.Friend}>
      <img src={props.avatar} alt="avatar" />
      <p>{props.username}</p>
    </div>
  );
};

export default Friend;
