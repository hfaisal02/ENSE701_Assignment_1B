// pages/index.tsx
import React from 'react';
import './globals.css'; // Import the CSS file
import Navbar from '../components/Navbar'; // Import the Navbar component

const IndexPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <Navbar /> {/* Include the Navbar component here */}
      <h1 style={styles.heading}>SPEED</h1>
      <div style={styles.searchContainer}>
        <input type="text" placeholder="Search SPEED..." style={styles.searchInput} />
        <div style={styles.searchIcon}>🔍</div>
        <div style={styles.searchButton}>Search</div> {/* Add a "Search" button */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  submitButton: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#737373', // Set the button color
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  heading: {
    fontFamily: 'NextFont', // Apply the font here
    fontSize: '4rem',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'column', // Set to column
    alignItems: 'center',
    marginTop: '20px',
  },
  searchInput: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '300px',
    background: '#333',
    color: '#fff',
  },
  searchIcon: {
    fontSize: '2rem', // Increase the font size for the magnifying glass
  },
  searchButton: {  // searchButton adjustments
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#737373',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default IndexPage;
