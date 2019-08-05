import React from "react";
import styles from "./FamilyInfo.module.css";
import closeIcon from "../../images/cross.svg";

import SimpleBar from 'simplebar-react';

import 'simplebar/dist/simplebar.min.css';

const FamilyInfo = props => {
  return (
    <div className={styles.FamilyInfo}>
      <img src={closeIcon} alt="close" onClick={props.closeFamilyInfo} />
      <h1>The {props.title}'s</h1>
      <div className={styles.body}>
        <SimpleBar style={{ height: '100%' }}>
          {props.body}
        </SimpleBar>  
      </div>
      <div className={styles.controls}>
        <button>Edit Biography</button>
        <button onClick={props.openUploadCrest}>Change Family Crest</button>
      </div>
    </div>
  );
};

export default FamilyInfo;
