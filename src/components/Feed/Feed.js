import React from "react";
import tagsIcon from "../../images/tags.svg";
import moreIcon from "../../images/more.svg";
// import likeIcon from "../../images/like.svg";
import likedIcon from "../../images/liked.svg";
import shareIcon from "../../images/share.svg";
import commentsIcon from "../../images/comments.svg";
import styles from "./Feed.module.css";
import Comments from "../Comments/Comments";

class Feed extends React.Component {
  state = {
    commentOverlayOpen: false,
    feedOverlay: false
  };

  handleCommentOverlay = () => {
    this.setState(prevState => {
      return { commentOverlayOpen: !prevState.commentOverlayOpen };
    });
  };
  render() {
    let commentOverlay = this.state.commentOverlayOpen ? (
      <Comments click={this.handleCommentOverlay} />
    ) : null;

    let content;

    if (this.props.contentType === "textBackground") {
      content = (
        <div className={styles.contentText}>
          <div>
            <h2>{this.props.quote}</h2>
            <p>{this.props.author}</p>
          </div>
        </div>
      );
    } else if (this.props.contentType === "video") {
      content = (
        <div className={styles.contentVideo}>
          <video controls>
            <source src={this.props.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    } else if (this.props.contentType === "image") {
      content = (
        <div className={styles.contentImage}>
          <img src={this.props.image} alt="" />
        </div>
      );
    } else if (this.props.contentType === "imageAd") {
      content = (
        <div className={styles.contentImageAd}>
          <img src={this.props.image} alt="" />
          <div className={styles.description}>
            <div className={styles.heading}>
              <p className={styles.text}>{this.props.text}</p>
              <button>{this.props.btnText}</button>
            </div>
            <span>{this.props.brand}</span>
          </div>
        </div>
      );
    } else if (this.props.contentType === "imageText") {
      content = (
        <div className={styles.contentImageText}>
          <img src={this.props.image} alt="" />
          <div className={styles.description}>
            <p>{this.props.caption}</p>
          </div>
        </div>
      );
    }
    return (
      <div className={styles.Feed}>
        <div className={styles.Header}>
          <div>
            <img src={this.props.avatar} alt="avatar" />
            <div className={styles.info}>
              <h3 className="user">{this.props.user}</h3>
              <span>
                {this.props.created}
                <span>
                  <img src={tagsIcon} alt="tags" />
                  {this.props.tags}
                </span>
              </span>
            </div>
            <img src={moreIcon} alt="More" />
          </div>
        </div>
        {content}
        <div className={styles.footer}>
          <div className={styles.top}>
            <span>
              {this.props.reachCount} <span className={styles.mark}>Reach</span>
            </span>
            <div>
              <span>
                {this.props.shareCount}{" "}
                <span className={styles.mark}>Shares</span>
              </span>
              <span onClick={this.handleCommentOverlay}>
                {this.props.commentCount}{" "}
                <span className={styles.mark}>Comments</span>
              </span>
            </div>
          </div>
          <div className={styles.bottom}>
            <span>
              <span className={styles.likeCount}>{this.props.likeCount}</span>{" "}
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
                <img
                  src={commentsIcon}
                  alt="comments"
                  onClick={this.handleCommentOverlay}
                />
              </button>
            </div>
          </div>
        </div>
        {commentOverlay}
      </div>
    );
  }
}

export default Feed;
