import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const ViewArticles: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/articles');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={styles.container}>
      <Navbar />
      <h1 style={styles.heading}>Current Articles</h1>
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    color: '#fff',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '2rem',
  },
  table: {
    width: '80%',
    margin: 'auto',
    borderCollapse: 'collapse',
    color: '#fff',
    border: '1px solid #fff', // Overall border for the table
  },
  th: {
    padding: '8px 15px',
    borderBottom: '1px solid #fff',  // White bottom border for headers
    backgroundColor: '#555',
    textAlign: 'center', // Center the contents horizontally
    verticalAlign: 'middle', // Center the contents vertically
  },
  td: {
    padding: '8px 15px',
    borderBottom: '1px solid #fff',  // White bottom border for cells
    textAlign: 'center', // Center the contents horizontally
    verticalAlign: 'middle', // Center the contents vertically
  },
};

export default ViewArticles;
