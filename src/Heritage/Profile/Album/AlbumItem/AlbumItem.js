import React, {Component} from 'react';
import styles from './AlbumItem.module.css';

import moreIcon from "../../../../images/more.svg";
import crossIcon from "../../../../images/cross.svg";
import trashIcon from "../../../../images/trash.svg";
import pencilIcon from "../../../../images/pencil.svg";

class AlbumItem extends Component {

  state = {
    menuClicked: false,
  }

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
      <div className={styles.item}>
        <div className={styles.itemHeader}>
          <p>{this.props.meta}</p>
          <img
            src={moreIcon}
            alt="more"
            onClick={this.handleMenuClicked}
          />
          {this.state.menuClicked ? (
            <div className={styles.menu}>
              <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                zIndex: 1
              }} onClick={this.handleMenuClosed}></div>
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
        <figure>
          <img src={this.props.src} alt="" />
        </figure>
      </div>
    )
  }
}

export default AlbumItem;