import React from 'react';
import '../src/app/globals.css'; // Import the CSS file
import Navbar from '../components/Navbar'; // Import the Navbar component
const IndexPage: React.FC = () => {
  return (
  <div style={styles.container as React.CSSProperties}>
    <h1 style={styles.heading}>Intro to SPEED</h1> {/* New heading */}
  <div>
    <Navbar/> {/*Navbar Component*/}
    <label>Hello brah</label>
    </div>
    </div>
    );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  heading: {
    fontSize: '2rem',
    color: '#ffffff',
    marginBottom: '20px',
  },
};

export default IndexPage;