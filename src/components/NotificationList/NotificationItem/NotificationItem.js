import React from "react";
import styles from "./NotificationItem.module.css";

const NotificationItem = props => {
  return (
    <div className={styles.NotificationItem}>
      <img src={props.avatar} alt="" />
      <div>
        <p>
          <strong>{props.username}</strong> {props.message}
        </p>
        <span>{props.time}</span>
      </div>
    </div>
  );
};

export default NotificationItem;
