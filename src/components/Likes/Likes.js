import React from "react";
import styles from "./Likes.module.css";
import PeopleList from "../PeopleList/PeopleList";
import closeBtn from "../../images/cross.svg";
import likedIcon from "../../images/liked.svg";

import MediaQuery from 'react-responsive';

const Likes = props => {
  return (
    <MediaQuery maxWidth={768}>
      {(matches) => {
        if (matches) {
          return (
            <div className={styles.Likes}>
              <div className={styles.header}>
                <p>
                  people who liked{" "}
                  <img
                    style={{ width: "22px", verticalAlign: "middle" }}
                    src={likedIcon}
                    alt=""
                  />
                </p>
                <img src={closeBtn} onClick={props.click} alt="close" />
              </div>
              <PeopleList people={props.people} />
            </div>
          )
        } else {
          return (
            <div className={styles.LikesWrapper}>
              <div className={styles.backdrop} onClick={props.click}></div>
              <div className={styles.Likes}>
                <div className={styles.header}>
                  <p>
                    people who liked{" "}
                    <img
                      style={{ width: "22px", verticalAlign: "middle" }}
                      src={likedIcon}
                      alt=""
                    />
                  </p>
                  <img src={closeBtn} onClick={props.click} alt="close" />
                </div>
                <PeopleList people={props.people} />
              </div>
            </div>
          )
        }
      }}
    </MediaQuery>
    );
};

export default Likes;
