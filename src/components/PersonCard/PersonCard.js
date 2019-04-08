import React from "react";
import styles from "./PersonCard.module.css";

const PersonCard = props => {
  return (
    <div className={styles.personCard}>
      <img src={props.avatar} alt="avatar" />
      <p>{props.relationship}</p>
      <p>{props.username}</p>
    </div>
  );
};

export default PersonCard;
