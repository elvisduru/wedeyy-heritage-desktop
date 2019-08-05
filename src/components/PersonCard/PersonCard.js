import React from "react";
import styles from "./PersonCard.module.css";

const PersonCard = props => {
  return (
    <div className={styles.personCard} onClick={props.click}>
      <img src={props.avatar} alt="" />
      <p>{props.relationship}</p>
      <p>{props.username}</p>
    </div>
  );
};

export default PersonCard;
