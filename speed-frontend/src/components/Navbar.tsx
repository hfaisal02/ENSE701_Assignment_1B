// components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={{ ...styles.navItem, ...styles.navItemBold }}>
          <a href="/">Home Page</a>
        </li>
        <li style={{ ...styles.navItem, ...styles.navItemBold }}>
          <a href="/intro">Intro to SPEED</a>
        </li>
        <li style={{ ...styles.navItem, ...styles.navItemBold }}>
          <a href="/submit">Submit an Article</a>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    position: 'fixed',
    top: '10px',
    right: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Blended background
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
  },
  navItem: {
    margin: '0 20px',
    position: 'relative',
  },
  navItemBold: {
    fontWeight: 'bold', // Make the items bold
    cursor: 'pointer',
  },
  line: {
    position: 'absolute',
    width: '100%',
    height: '3px',
    background: 'blue', // Color of the line
    bottom: 0,
    left: 0,
    transform: 'scaleX(0)',
    transformOrigin: 'bottom right',
    transition: 'transform 0.3s ease',
  },
};

export default Navbar;
