import React from "react";
import styles from "./SuggestionItem.module.css";
import followIcon from "../../../images/follow-user.svg";

const SuggestionItem = props => {
  return (
    <div className={styles.SuggestionItem}>
      <img src={props.avatar} alt="avatar" />
      <p>{props.username}</p>
      <button>
        <img src={followIcon} alt="follow-icon" /> FOLLOW
      </button>
    </div>
  );
};

export default SuggestionItem;
