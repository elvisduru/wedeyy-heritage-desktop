import React from "react";
import styles from "./Profile.module.css";
// import Wall from "./Wall/Wall";
import NavHeader from "../../components/NavHeader/NavHeader";
import StarRatingComponent from "react-star-rating-component";
// import About from "./About/About";
// import Friends from "./Friends/Friends";
import Tree from "./Tree/Tree";

const Profile = () => {
  return (
    <div className={styles.Profile}>
      <div>
        <NavHeader heading="Kehinde Omotoso" />
        <div
          className={styles.Header}
          style={{ backgroundImage: `url(http://i.pravatar.cc/400)` }}
        >
          <div className={styles.Top}>
            <div>
              <h4>Kehinde John Omotoso</h4>
              <StarRatingComponent
                name="rate"
                editing={false}
                starCount={5}
                value={3}
                starColor="#ffffff"
              />
            </div>
            <button>Unfollow</button>
          </div>
          <div className={styles.Bottom}>
            <ul>
              <li>About</li>
              <li>Friends (290)</li>
              <li>Wall</li>
              <li>Tree</li>
            </ul>
          </div>
          <img src="http://i.pravatar.cc/100" alt="avatar" />
        </div>
      </div>
      {/* <Wall /> */}
      {/* <Friends /> */}
      {/* <About /> */}
      <Tree />
    </div>
  );
};

export default Profile;
