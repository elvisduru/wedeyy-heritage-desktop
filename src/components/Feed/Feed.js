import React from "react";
import tagsIcon from "../../images/tags.svg";
import moreIcon from "../../images/more.svg";
// import likeIcon from "../../images/like.svg";
import likedIcon from "../../images/liked.svg";
import shareIcon from "../../images/share.svg";
import commentsIcon from "../../images/comments.svg";
import styles from "./Feed.module.css";

const Feed = props => {
  return (
    <div className={styles.Feed}>
      <div className={styles.Header}>
        <div>
          <img src={props.avatar} alt="avatar" />
          <div className={styles.info}>
            <h3 className="user">{props.user}</h3>
            <span>
              {props.created}
              <span>
                <img src={tagsIcon} alt="tags" />
                {props.tags}
              </span>
            </span>
          </div>
          <img src={moreIcon} alt="More" />
        </div>
      </div>
      <div className={styles.contentText}>
        {/* write logic to render content based on its type; img, text, video, etc */}
        {props.content}
      </div>
      <div className={styles.footer}>
        <div className={styles.top}>
          <span>
            {props.reachCount} <span className={styles.mark}>Reach</span>
          </span>
          <div>
            <span>
              {props.shareCount} <span className={styles.mark}>Shares</span>
            </span>
            <span>
              {props.commentCount} <span className={styles.mark}>Comments</span>
            </span>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>
            <span className={styles.likeCount}>{props.likeCount}</span>{" "}
            <span className={styles.mark}>Likes</span>
          </span>
          <div className="controls">
            <button>
              <img src={likedIcon} alt="like" />
            </button>
            <button>
              <img src={shareIcon} alt="share" />
            </button>
            <button>
              <img src={commentsIcon} alt="comments" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
