import React from "react";
import styles from "./Person.module.css";
import followIcon from "../../../images/follow-user.svg";

const Person = props => {
  return (
    <div className={styles.Person}>
      <div className={styles.info}>
        <img src={props.avatar} alt="avatar" />
        <div>
          <p>{props.username}</p>
          <span>{props.relationship}</span>
        </div>
      </div>
      <button>
        <img src={followIcon} alt="follow-icon" /> FOLLOW
      </button>
    </div>
  );
};

export default Person;
