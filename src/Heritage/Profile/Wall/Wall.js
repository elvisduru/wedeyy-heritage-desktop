import React from "react";
import Feed from "../../../components/Feed/Feed";
import styles from "./Wall.module.css";

const Wall = () => {
  return (
    <div className={styles.Wall}>
      <h1>Showing on my wall.</h1>
      <Feed
        avatar="http://i.pravatar.cc/102"
        user="John Doe"
        created="Feb 10 at 01:11 PM"
        tags={8}
        content={
          <div>
            <h2>
              The best way to eat an elephant in your path is cut him up into
              little pieces.|
            </h2>
            <p>Says: Swetaleena Dash.</p>
          </div>
        }
        reachCount="15k"
        likeCount={77}
        shareCount={5}
        commentCount={10}
      />
    </div>
  );
};

export default Wall;
