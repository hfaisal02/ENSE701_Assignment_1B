// pages/index.tsx
import React, { useState } from 'react';
import '../src/app/globals.css';
import Navbar from '../components/Navbar'; // Import the Navbar component
import axios from 'axios'; // Ensure you've installed axios
import { useRouter } from 'next/router';

const IndexPage: React.FC = () => {

  const [searchTerm, setSearchTerm] = useState(''); // State to manage search term
  const router = useRouter();

  const handleSearchSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchTerm = event.currentTarget.search.value;  // Assuming the name attribute of the input is "search"
    
    router.push(`/search?term=${searchTerm}`);  // Navigate to the search results page
};

  return (
    <div style={styles.container}>
      <Navbar /> {/* Include the Navbar component here */}
      <h1 style={styles.heading}>SPEED</h1>
      <h2 style={styles.subheading}>Software Practice Empirical Evidence Database </h2>
      <form onSubmit={handleSearchSubmit} style={styles.searchContainer as React.CSSProperties}>
      <input type="text" placeholder="Search SPEED..." name="search" style={styles.searchInput} />
        <div style={styles.searchIcon}>🔍</div>
        <button type="submit" style={styles.searchButton}>Search</button> {/* Convert div to button for form submission */}
      </form>
    </div>
  );
}
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
  subheading: {
    fontFamily: 'Courier New', // Apply the font here
    fontSize: '0.75rem',
    color: '#51a31e',
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