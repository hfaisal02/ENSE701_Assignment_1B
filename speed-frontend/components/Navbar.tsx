// components/Navbar.tsx
import React from 'react';
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
      <nav style={styles.navbar as React.CSSProperties}>
      <ul style={styles.navList}>
        <li style={{ ...styles.navItem, ...styles.navItemBold } as React.CSSProperties}>
          <Link href="/">Home Page</Link>
        </li>
        <li style={{ ...styles.navItem, ...styles.navItemBold } as React.CSSProperties}>
          <Link href="/intro">Intro to SPEED</Link>
        </li>
        <li style={{ ...styles.navItem, ...styles.navItemBold } as React.CSSProperties}>
          <Link href="/submit">Submit Evidence</Link>
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