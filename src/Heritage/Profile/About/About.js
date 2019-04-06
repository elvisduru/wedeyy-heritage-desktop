import React from "react";
import styles from "./About.module.css";
import editIcon from "../../../images/edit.svg";

const About = () => {
  return (
    <div className={styles.About}>
      <div className={styles.stats}>
        <div>
          <p>FOLLOWERS</p>
          <p>23K</p>
        </div>
        <div className={styles.divider} />
        <div>
          <p>LIKES</p>
          <p>5K</p>
        </div>
        <div className={styles.divider} />
        <div>
          <p>FOLLOWING</p>
          <p>23K</p>
        </div>
      </div>
      <div className={styles.biography}>
        <div className={styles.sectionHeader}>
          <h3>Biography</h3>
          <p>
            <a href="./">Edit</a>
          </p>
        </div>
        <p>No Biography Here</p>
      </div>
      <div className={styles.masonry}>
        <figure className={styles.masonryBrick}>
          <img
            className={styles.masonryImg}
            src="http://i.pravatar.cc/300"
            alt="avatar"
          />
        </figure>
        <figure className={styles.masonryBrick}>
          <img
            className={styles.masonryImg}
            src="http://i.pravatar.cc/301"
            alt="avatar"
          />
        </figure>
        <figure className={styles.masonryBrick}>
          <img
            className={styles.masonryImg}
            src="http://i.pravatar.cc/302"
            alt="avatar"
          />
        </figure>
        <figure className={styles.masonryBrick}>
          <img
            className={styles.masonryImg}
            src="http://i.pravatar.cc/303"
            alt="avatar"
          />
        </figure>
        <figure className={styles.masonryBrick}>
          <img
            className={styles.masonryImg}
            src="http://i.pravatar.cc/304"
            alt="avatar"
          />
        </figure>
      </div>
      <div className={styles.Memories}>
        <div className={styles.sectionHeader}>
          <h3>Saved Memories</h3>
          <p>
            <a href="./">View All</a>
          </p>
        </div>
        <div>
          <figure>
            <img src="http://i.pravatar.cc/305" alt="avatar" />
          </figure>
          <figure>
            <img src="http://i.pravatar.cc/306" alt="avatar" />
          </figure>
          <figure>
            <img src="http://i.pravatar.cc/307" alt="avatar" />
          </figure>
          <figure>
            <img src="http://i.pravatar.cc/308" alt="avatar" />
          </figure>
          <figure>
            <img src="http://i.pravatar.cc/309" alt="avatar" />
          </figure>
          <figure>
            <img src="http://i.pravatar.cc/310" alt="avatar" />
          </figure>
        </div>
      </div>
      <div className={styles.LifeEvents}>
        <div className={styles.sectionHeader}>
          <h3>Life Events</h3>
          <p>
            <a href="./">Edit</a>
          </p>
        </div>
        <div className={styles.events}>
          <div>
            <img src={editIcon} alt="edit" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 24 24"
            >
              <polygon points="12,3 1,9 12,15 23,9 " />
              <polygon points="19,12.8 12,17 5,12.8 5,17.2 12,21 19,17.2 " />
              <rect x="21" y="9" width="2" height="8" />
            </svg>
            <p>Graduation from Havard University.</p>
            <small>10-02-2015</small>
          </div>
          <div>
            <img src={editIcon} alt="edit" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.57 62.58">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path d="M0,31.29C-.08,14.52,14.09.18,30.94,0A31.54,31.54,0,0,1,62.57,31.31a31.53,31.53,0,0,1-31.3,31.26A31.51,31.51,0,0,1,0,31.29ZM50.33,47.08c11-11.37,6-33.68-9.37-38.35-.64,5.39-3.93,7.3-9.1,7-2.94-.19-3.84,1.82-3.65,4.45s-.57,4.22-3.29,5.09c-1.17.38-1.92,2.08-2.86,3.17,1.23,1,2.37,2.55,3.72,2.75a64.26,64.26,0,0,0,9,.14c5.42,0,5.92.51,6,6,0,.75,0,1.5,0,2.25-.11,2.53,1,3.76,3.55,4.41C46.26,44.51,48.06,45.88,50.33,47.08ZM7.24,26.22C3.42,39.82,13.76,54.38,28,55.8V50.26c-4.13-.9-6.24-3.36-6.09-7.67a3.61,3.61,0,0,0-.65-2.42C16.69,35.51,12,30.95,7.24,26.22Z" />
                </g>
              </g>
            </svg>
            <p>Moved to New York City.</p>
            <small>10-05-2015</small>
          </div>
        </div>
      </div>
      <div className={styles.Family}>
        <div className={styles.sectionHeader}>
          <h3>Family Members</h3>
          <p>
            <a href="./">View Tree</a>
          </p>
        </div>
        <div className={styles.members}>
          <div>
            <img src="http://i.pravatar.cc/308" alt="edit" />
            <p>Grand Father</p>
            <p>Software Engineer</p>
          </div>
          <div>
            <img src="http://i.pravatar.cc/309" alt="edit" />
            <p>Grand Mother</p>
            <p>Civil Servant</p>
          </div>
          <div>
            <img src="http://i.pravatar.cc/310" alt="edit" />
            <p>Father</p>
            <p>Software Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
