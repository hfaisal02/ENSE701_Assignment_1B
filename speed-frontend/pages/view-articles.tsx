import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const ViewArticles: React.FC = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch the articles when the component is mounted
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/articles');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div style={styles.container as React.CSSProperties}>
      <Navbar />
      <h1>Current Articles</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Authors</th>
            <th>Year</th>
            <th>Journal/Conference</th>
            <th>DOI</th>
            <th>Abstract</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr key={index}>
              <td>{article.title}</td>
              <td>{article.authors}</td>
              <td>{article.year}</td>
              <td>{article.journal}</td>
              <td>{article.doi}</td>
              <td>{article.abstract}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '80%',
    margin: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  // Add more styles as needed
};

export default ViewArticles;
