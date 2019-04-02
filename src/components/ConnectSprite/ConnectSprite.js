import React from "react";
import Logo from "../Logo/Logo";
import styles from "./ConnectSprite.module.css";

const ConnectSprite = props => {
  return (
    <div className={styles.ConnectSprite}>
      <Logo width={300} height={179.7} />
    </div>
  );
};

export default ConnectSprite;
