import React, { useState } from 'react';
import axios from 'axios'; // You'll need to import Axios or your preferred HTTP client

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

  return ( //submit article table format
      <div style={styles.container as React.CSSProperties}> 
      <form onSubmit={handleSubmit}>
        <label>Title:
          <input type="text" name="title" value={articleData.title} onChange={handleChange} />
        </label>
        <br />
        <label>Authors:
          <input type="text" name="authors" value={articleData.authors} onChange={handleChange} />
        </label>
        <br />
        <label>Year:
          <input type="number" name="year" value={articleData.year} onChange={handleChange} />
        </label>
        <br />
        <label>Journal/Conference:
          <input type="text" name="journal" value={articleData.journal} onChange={handleChange} />
        </label>
        <br />
        <label>DOI:
          <input type="text" name="doi" value={articleData.doi} onChange={handleChange} />
        </label>
        <br />
        <label>Abstract:
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
};

export default SubmitArticle;
