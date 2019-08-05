import React from "react";
import styles from "./PostBar.module.css";
import { Link } from "react-router-dom";

const PostBar = props => {
  return (
    <div className={styles.PostBar}>
      <form action="#">
        <Link to="/profile/wall">
          <img src={props.avatar} alt="" />
        </Link>
        <input
          type="text"
          placeholder="Share your thoughts, or post something."
          readOnly
          onClick={props.click}
        />
      </form>
    </div>
  );
};

export default PostBar;
