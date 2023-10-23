import React, { useState } from 'react';
import axios from 'axios';

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
      <h1 style={styles.heading}>Submit Evidence</h1> {/* New heading */}
      <form onSubmit={handleSubmit}>
        <label style={styles.label}>Title:
          <input type="text" name="title" value={articleData.title} onChange={handleChange} />
        </label>
        <br />
        <label style={styles.label}>Authors:
          <input type="text" name="authors" value={articleData.authors} onChange={handleChange} />
        </label>
        <br />
        <label style={styles.label}>Year:
          <input type="number" name="year" value={articleData.year} onChange={handleChange} />
        </label>
        <br />
        <label style={styles.label}>Journal/Conference:
          <input type="text" name="journal" value={articleData.journal} onChange={handleChange} />
        </label>
        <br />
        <label style={styles.label}>DOI:
          <input type="text" name="doi" value={articleData.doi} onChange={handleChange} />
        </label>
        <br />
        <label style={styles.label}>Abstract:
          <textarea name="abstract" value={articleData.abstract} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit Article</button>
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
  heading: {
    fontSize: '2rem',
    color: '#ffffff', // White color for the heading
    marginBottom: '20px', // Some space below the heading
  },
  label: {
    marginBottom: '10px', // Space between the label and its input field
  },
};

export default SubmitArticle;
