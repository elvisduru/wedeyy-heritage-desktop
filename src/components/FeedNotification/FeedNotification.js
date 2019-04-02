import React from "react";
import styles from "./FeedNotification.module.css";

const FeedNotification = props => {
  return (
    <div className={styles.FeedNotification}>
      <img src={props.image} alt={props.imageAlt} />
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
      <button
        style={
          props.btnColor
            ? { backgroundColor: props.btnColor, color: "white" }
            : null
        }
      >
        {props.btnText}
      </button>
    </div>
  );
};

export default FeedNotification;
