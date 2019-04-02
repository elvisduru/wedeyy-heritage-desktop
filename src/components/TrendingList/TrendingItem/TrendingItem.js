import React from "react";
import styles from "./TrendingItem.module.css";

const TrendingItem = props => {
  return (
    <div
      className={styles.TrendingItem}
      style={{ backgroundImage: `url(${props.background})` }}
    >
      <div className={styles.top}>
        <span>#{props.count}</span>
        <span>{props.videoLength}</span>
      </div>
      <div className={styles.bottom}>
        <p>
          <img src={props.avatar} alt="avatar" />
          <span>{props.username}</span>
        </p>
      </div>
    </div>
  );
};

export default TrendingItem;
