import React from "react";
import styles from "./NavBar.module.css";
import NavItem from "./NavItem/NavItem";

const NavBar = props => {
  const menu = props.navList.map(item => <NavItem key={item}>{item}</NavItem>);
  return <ul className={styles.NavBar}>{menu}</ul>;
};

export default NavBar;
