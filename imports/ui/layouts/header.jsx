import React from 'react';
import {Link} from 'react-router';
import {TextField} from 'material-ui';

const styles = {
  header: {
    zIndex: 2
  },
  account: {
    float: "right"
  },
  icon: {
    backgroundColor: "#6e6865",
    padding: 13,
    borderRadius: 15,
  }
};

const Header = () => (
  <header style={styles.header}>
    <img src="./images/bismillah.png" alt="Bismillah"/>
    <h1>Welcome to Hadits</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="hadits/add">Add Hadits</Link>
      <Link to="search" style={styles.account}>
        <i className="fa fa-search fa-lg" aria-hidden="true" style={styles.icon}></i>
      </Link>
    </nav>
  </header>
);

export default Header;
