import React from "react";
import styles from "./BroadCast.module.css";
import playBtnIcon from "../../images/play-button.svg";
import video from "../../videos/live.mp4";
import Comments from "../Comments/Comments";

class Broadcast extends React.Component {
  state = {
    startedBroadcast: false,
    menuClicked: false,
    commentsOpen: false
  };

  handleStartBroadcast = () => {
    this.setState({ startedBroadcast: true });
  };

  handleStopBroadcast = () => {
    this.setState({ startedBroadcast: false });
  };

  handleMenuOpen = () => {
    this.setState({ menuClicked: true });
  };

  handleMenuClosed = e => {
    e.stopPropagation();
    this.setState({ menuClicked: false });
  };

  handleCommentOpen = () => {
    this.setState({ commentsOpen: true });
  };

  handleCommentClose = () => {
    this.setState({ commentsOpen: false });
  };

  stopEventPropagation = e => {
    e.stopPropagation();
  };

  render() {
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
            onClick={this.handleMenuOpen}
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
        {this.state.startedBroadcast ? (
          <div className={styles.StartedBroadcast}>
            <div className={styles.views}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
              <span>&nbsp;1.5k</span>
            </div>
            <div className={styles.bottom}>
              <p>Broadcasting: 08:29</p>
              <div className={styles.messages}>
                <div className={styles.message}>
                  <img src="http://i.pravatar.cc/100" alt="" />
                  <p>
                    <strong>Kenneth Gate: </strong>You guys should enjoy. I know
                    i am missing out a lot.
                  </p>
                </div>
                <div className={styles.message}>
                  <img src="http://i.pravatar.cc/101" alt="" />
                  <p>
                    <strong>Iyabo Ojo: </strong>This is good stuff. Keep it up
                    bro. I have always enjoyed your live shows.
                  </p>
                </div>
              </div>
              <div className={styles.controls}>
                <input
                  type="text"
                  placeholder="Write comment, press enter to send."
                />
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  onClick={this.handleCommentOpen}
                >
                  <g>
                    <path d="M24,18c1.1,0,2-0.9,2-2V2c0-1.1-0.9-2-2-2H2C0.9,0,0,0.9,0,2v24l8-8H24z" />
                    <path d="M30,4h-2v16H10l-4,4h19.6l6.4,8V6C32,4.9,32,4,30,4z" />
                  </g>
                </svg>
                <div
                  className={styles.stop}
                  onClick={this.handleStopBroadcast}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.play}>
            <img
              src={playBtnIcon}
              alt="play"
              onClick={this.handleStartBroadcast}
            />
            <p>Go LIVE!</p>
          </div>
        )}
        {this.state.menuClicked && this.state.startedBroadcast ? (
          <div className={styles.menu} onClick={this.handleMenuClosed}>
            <div className={styles.options} onClick={this.stopEventPropagation}>
              <div className={styles.option}>
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  className={styles.heartIcon}
                >
                  <path
                    d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543
	c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503
	c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"
                  />
                </svg>
                <span>See Likes</span>
              </div>
              <div className={styles.option}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path opacity=".87" fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z" />
                </svg>
                <span>Disable Comments</span>
              </div>
              <div className={styles.option}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                </svg>
                <span>Comment Wait Time</span>
                <span style={{ marginLeft: "auto", marginRight: "15px" }}>
                  15s
                </span>
              </div>
              <div className={styles.option}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
                <span>See Who is watching</span>
              </div>
            </div>
          </div>
        ) : null}
        {this.state.startedBroadcast && this.state.commentsOpen ? (
          <Comments click={this.handleCommentClose} />
        ) : null}
      </div>
    );
  }
}

export default Broadcast;
