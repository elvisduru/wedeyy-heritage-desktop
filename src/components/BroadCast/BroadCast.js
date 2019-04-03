import React from "react";
import styles from "./BroadCast.module.css";
import playBtnIcon from "../../images/play-button.svg";
import video from "../../videos/live.mp4";

const BroadCast = props => {
  return (
    <div className={styles.BroadCast}>
      <video id="background-video" muted autoPlay loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.Header}>
        <h2>Live Broadcast from Kehinde.</h2>

        <svg
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          width="612px"
          height="612px"
          viewBox="0 0 612 612"
        >
          <g>
            <g>
              <circle cx="69.545" cy="306" r="69.545" />
              <circle cx="306" cy="306" r="69.545" />
              <circle cx="542.455" cy="306" r="69.545" />
            </g>
          </g>
        </svg>
      </div>
      <div>
        <img src={playBtnIcon} alt="play" />
        <p>Go LIVE!</p>
      </div>
    </div>
  );
};

export default BroadCast;
