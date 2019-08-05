import React from "react";
import styles from "./Comments.module.css";
import CommentList from "../CommentList/CommentList";
import closeBtn from "../../images/cross.svg";
import emojiIcon from "../../images/faces.svg";
import albumIcon from "../../images/album.svg";

import MediaQuery from 'react-responsive';

const Comments = props => {
  return (
    <MediaQuery maxWidth={768}>
      {(matches) => {
        if (matches) {
          return (
            <div className={styles.Comments}>
              <div className={styles.header}>
                <p>comments</p>
                <img src={closeBtn} onClick={props.click} alt="close" />
              </div>
              <CommentList />
              <div className={styles.addComment}>
                <textarea placeholder="Write Comment" style={{overflow:'hidden'}} onKeyUp={(e) => {
                  e.target.style.height = "1px";
                  e.target.style.height = (15 + e.target.scrollHeight) + "px";
                }} />
                <div>
                  <img src={emojiIcon} alt="emoji" />
                  <img src={albumIcon} alt="album" />
                </div>
              </div>
            </div>
          )
        } else {
          return (
            <div className={styles.CommentsWrapper}>
              <div className={styles.backdrop} onClick={props.click}></div>
              <div className={styles.Comments}>
                <div className={styles.header}>
                  <p>comments</p>
                  <img src={closeBtn} onClick={props.click} alt="close" />
                </div>
                <CommentList />
                <div className={styles.addComment}>
                  <textarea placeholder="Write Comment" />
                  <div>
                    <img src={emojiIcon} alt="emoji" />
                    <img src={albumIcon} alt="album" />
                  </div>
                </div>
              </div>
            </div>
          )
        }
      }}
    </MediaQuery>
    
  );
};

export default Comments;
