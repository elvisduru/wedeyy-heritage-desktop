import React from "react";
import styles from "./DateMatchItem.module.css";

const DateMatchItem = props => {
  return (
    <div className={styles.DateMatchItem}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${props.avatar})` }}
      />
      <h5>{props.username}</h5>
      <h6>{props.location}</h6>
    </div>
  );
};

export default DateMatchItem;
