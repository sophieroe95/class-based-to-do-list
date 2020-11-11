import React, { Component } from "react";
import styles from "./Header.module.scss";

class Header extends Component {
  render() {
    return (
      <>
        <p>You have <span className={styles.number}>{this.props.tasks}</span> to dos left to do </p>
      </>
    );
  }
}

export default Header;
