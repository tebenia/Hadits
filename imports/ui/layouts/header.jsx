import React from 'react';

const styles = {
  zIndex: 2
};

const Header = () => (
  <header style={styles}>
    <img src="./images/bismillah.png" alt="Bismillah"/>
    <h1>Welcome to Hadits</h1>
    <nav>
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Gallery</a>
      <a href="">Contact</a>
    </nav>
  </header>
);

export default Header;
