import React from 'react';
import '../src/app/globals.css'; // Import the CSS file
import Navbar from '../components/Navbar'; // Import the Navbar component
const IndexPage: React.FC = () => {
  return (
  <div style={styles.container as React.CSSProperties}>
    <h1 style={styles.heading}>Intro to SPEED</h1> {/* New heading */}
  <div>
    <Navbar/> {/*Navbar Component*/}
    <label>SPEED is a dynamic platform designed to assist software developers in making informed decisions about the use of various software
      <br></br>engineering practices. Recognizing the challenges faced by practitioners in accessing academic research on software engineering, 
      <br></br>SPEED centralizes evidence from published studies to validate claims made about different software engineering practices. 
      <br></br>Users can easily search for empirical evidence related to specific software engineering practices, such as Test-Driven Development (TDD),
      <br></br>to determine the veracity of claims made about these practices. This evidence is curated from academic articles that are proposed by 
      <br></br>the public and vetted by experts at the Software Engineering Research Centre (SERC) at AUT. The goal of SPEED is to provide a 
      <br></br>user-friendly, searchable database that offers summarized research findings, aiding software engineers in their decision-making 
      <br></br>processes based on credible evidence.</label>
    <label></label>
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
  label: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  }
};

export default IndexPage;