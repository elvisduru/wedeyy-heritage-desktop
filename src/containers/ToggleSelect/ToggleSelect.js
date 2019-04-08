import React, { Component } from "react";
import styles from "./ToggleSelect.module.css";

class ToggleSelect extends Component {
  state = {
    btn1selected: true,
    btn2selected: false
  };

  handleSelect1 = () => {
    this.setState({
      btn1selected: true,
      btn2selected: false
    });
  };

  handleSelect2 = () => {
    this.setState({
      btn1selected: false,
      btn2selected: true
    });
  };

  render() {
    let selected = {
      backgroundColor: "rgba(36, 80, 97, 1)",
      color: "white"
    };
    return (
      <div className={styles.ToggleSelect}>
        <button
          onClick={this.handleSelect1}
          style={this.state.btn1selected ? selected : null}
        >
          {this.props.btn1name}
        </button>
        <button
          onClick={this.handleSelect2}
          style={this.state.btn2selected ? selected : null}
        >
          {this.props.btn2name}
        </button>
      </div>
    );
  }
}

export default ToggleSelect;
