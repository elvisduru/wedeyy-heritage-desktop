import React from "react";
import styles from "./PostBar.module.css";

const PostBar = props => {
  return (
    <div className={styles.PostBar}>
      <form action="#">
        <img src={props.avatar} alt="avatar" />
        <input
          type="text"
          placeholder="Share your thoughts, or post something."
        />
      </form>
    </div>
  );
};

export default PostBar;
