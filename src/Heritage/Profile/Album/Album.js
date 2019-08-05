import React, {Component} from "react";
import styles from "./Album.module.css";
import NavHeader from "../../../components/NavHeader/NavHeader";
import AlbumItem from "./AlbumItem/AlbumItem";

class Album extends Component {
  state = {
    menuClicked: false,
    items: [
      {
        meta: "Lagos, Nigeria. 01-01-2019",
        src: "http://i.pravatar.cc/400"
      },
      {
        meta: "Lagos, Nigeria. 02-01-2019",
        src: "http://i.pravatar.cc/401"
      }
    ]
  };
  goBack = () => {
    this.props.history.goBack();
  };
  
  render() {
    return (
      <div className={styles.Album}>
        <NavHeader heading="Photos and Videos" click={this.goBack} />
        <div className={styles.content}>
          <h1>Kehinde's Photos and Videos</h1>
          <div className={styles.items}>
            {this.state.items.map(({meta, src}, index) => (
              <AlbumItem key={index} meta={meta} src={src} handleMenuClicked={this.handleMenuClicked} handleMenuClosed={this.handleMenuClosed} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Album;
