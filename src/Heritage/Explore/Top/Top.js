import React from "react";
import styles from "./Top.module.css";
import ExploreCardList from "../../../components/ExploreCardList/ExploreCardList";

const Top = props => {
  return (
    <div className={styles.Top}>
      <ExploreCardList />
    </div>
  );
};

export default Top;
