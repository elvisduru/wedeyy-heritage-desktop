import React from "react";
import styles from "./Album.module.css";
import NavHeader from "../../../components/NavHeader/NavHeader";
import moreIcon from "../../../images/more.svg";
import crossIcon from "../../../images/cross.svg";
import trashIcon from "../../../images/trash.svg";
import pencilIcon from "../../../images/pencil.svg";

class Album extends React.Component {
  state = {
    menuClicked: false
  };
  goBack = () => {
    this.props.history.goBack();
  };
  handleMenuClicked = prevState => {
    this.setState({ menuClicked: !prevState.menuClicked });
  };

  handleMenuClosed = () => {
    this.setState({ menuClicked: false });
  };

  stopEventPropagation = e => {
    e.stopPropagation();
  };
  render() {
    return (
      <div className={styles.Album}>
        <NavHeader heading="Photos and Videos" click={this.goBack} />
        <div className={styles.content}>
          <h1>Kehinde's Photos and Videos</h1>
          <div className={styles.items}>
            <div className={styles.item}>
              <div className={styles.itemHeader}>
                <p>Lagos, Nigeria. 01-01-2019</p>
                <img
                  src={moreIcon}
                  alt="more"
                  onClick={this.handleMenuClicked}
                />
              </div>
              <figure>
                <img src="http://i.pravatar.cc/400" alt="" />
              </figure>
            </div>
            <div className={styles.item}>
              <div className={styles.itemHeader}>
                <p>Lagos, Nigeria. 01-01-2019</p>
                <img
                  src={moreIcon}
                  alt="more"
                  onClick={this.handleMenuClicked}
                />
              </div>
              <figure>
                <img src="http://i.pravatar.cc/401" alt="" />
              </figure>
            </div>
          </div>
        </div>
        {this.state.menuClicked ? (
          <div className={styles.menu} onClick={this.handleMenuClosed}>
            <div className={styles.options} onClick={this.stopEventPropagation}>
              <div className={styles.option}>
                <img
                  src={crossIcon}
                  alt="cancel"
                  onClick={this.handleMenuClosed}
                />
                <span>Options</span>
              </div>
              <div className={styles.option}>
                <img src={pencilIcon} alt="cancel" />
                <span>Edit</span>
              </div>
              <div className={styles.option}>
                <img src={trashIcon} alt="cancel" />
                <span>Delete</span>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Album;
