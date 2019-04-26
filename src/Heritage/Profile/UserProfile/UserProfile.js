import React from "react";
import styles from "./UserProfile.module.css";
import closeBtn from "../../../images/cross.svg";
import avatarIcon from "../../../images/avatar.svg";
import deleteIcon from "../../../images/delete.svg";
import dashboardIcon from "../../../images/dashboard.svg";
import phoneMsgIcon from "../../../images/phone-msg.svg";
import visibilityIcon from "../../../images/visibility.svg";
import About from "../About/About";

const UserProfile = props => {
  return (
    <div className={styles.UserProfile}>
      <img
        className={styles.close}
        src={closeBtn}
        alt="close"
        onClick={props.click}
      />
      <div className={styles.PersonInfo}>
        <img src={props.avatar ? props.avatar : avatarIcon} alt="avatar" />
        <h4>{props.username}</h4>
        <p>{props.occupation}</p>
      </div>
      <div className={styles.controls}>
        <div className={styles.control}>
          <button>
            <img src={deleteIcon} alt="Delete" />
          </button>
          <p>Delete Person</p>
        </div>
        <div className={styles.control}>
          <button>
            <img src={phoneMsgIcon} alt="Connect" />
          </button>
          <p>Connect</p>
        </div>
        <div className={styles.control}>
          <button>
            <img src={dashboardIcon} alt="View Wall" />
          </button>
          <p>View Wall</p>
        </div>
        <div className={styles.control}>
          <button>
            <img src={visibilityIcon} alt="Tree Visibility" />
          </button>
          <p>Tree Visibility</p>
        </div>
      </div>
      <About />
    </div>
  );
};

export default UserProfile;
