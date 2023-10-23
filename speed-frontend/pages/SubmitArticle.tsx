import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const SubmitArticle: React.FC = () => {
  const [articleData, setArticleData] = useState({
    title: '',
    authors: '',
    year: '',
    journal: '',
    doi: '',
    abstract: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setArticleData({ ...articleData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/articles', articleData);
      console.log(response.data);
      // Display a success message to the user
    } catch (error) {
      console.error('Error submitting article:', error);
      // Display an error message to the user
    }
  };

  return (
    <div style={styles.container as React.CSSProperties}>
      <Navbar/> {/*Navbar Component*/}
      <h1 style={styles.heading}>Submit Evidence</h1> {/* New heading */}
      <form onSubmit={handleSubmit}>
        <div style={styles.fieldContainer}>
          <label style={styles.label}>Title:</label>
          <input type="text" name="title" value={articleData.title} onChange={handleChange} />
        </div>
        <div style={styles.fieldContainer}>
          <label style={styles.label}>Authors:</label>
          <input type="text" name="authors" value={articleData.authors} onChange={handleChange} />
        </div>
        <div style={styles.fieldContainer}>
          <label style={styles.label}>Year:</label>
          <input type="number" name="year" value={articleData.year} onChange={handleChange} />
        </div>
        <div style={styles.fieldContainer}>
          <label style={styles.label}>Journal/Conference:</label>
          <input type="text" name="journal" value={articleData.journal} onChange={handleChange} />
        </div>
        <div style={styles.fieldContainer}>
          <label style={styles.label}>DOI:</label>
          <input type="text" name="doi" value={articleData.doi} onChange={handleChange} />
        </div>
        <div style={styles.fieldContainer}>
          <label style={styles.label}>Abstract:</label>
          <textarea name="abstract" value={articleData.abstract} onChange={handleChange} />
        </div>
        <button type="submit" style={styles.button}>Submit Article</button>
      </form>
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
  button: {
    marginTop: '20px',
    alignSelf: 'center',
  },
  heading: {
    fontSize: '2rem',
    color: '#ffffff',
    marginBottom: '20px',
  },
  label: {
    marginBottom: '10px',
  },
  fieldContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '15px',
  },
};

export default SubmitArticle;
