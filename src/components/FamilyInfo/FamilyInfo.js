import React from "react";
import styles from "./FamilyInfo.module.css";
import closeIcon from "../../images/cross.svg";

const FamilyInfo = props => {
  return (
    <div className={styles.FamilyInfo}>
      <img src={closeIcon} alt="close" onClick={props.closeFamilyInfo} />
      <h1>The {props.title}'s</h1>
      <div className={styles.body}>{props.body}</div>
      <div className={styles.controls}>
        <button>Edit Biography</button>
        <button onClick={props.openUploadCrest}>Change Family Crest</button>
      </div>
    </div>
  );
};

export default FamilyInfo;
