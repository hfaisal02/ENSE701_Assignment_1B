import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const SearchResults: React.FC = () => {
  const router = useRouter();
  const { term } = router.query;  // Get the search term from the query
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    if (term) {
      const fetchResults = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/search?searchTerm=${term}`);
          setResults(response.data);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      };
      fetchResults();
    }
  }, [term]);

  return (
    <div style={styles.container as React.CSSProperties}>
      <Navbar/>
      <h1 style={styles.heading}>Search Results for &ldquo;{term}&rdquo;</h1>
      {results.length > 0 ? (
        results.map((article, index) => (
          <div key={index} style={styles.jsonOutput}>
            <pre>{JSON.stringify(article, null, 2)}</pre>
          </div>
        ))
      ) : (
        <p style={styles.noResults}>No results found.</p>
      )}
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      color: '#fff',
      backgroundColor: '#333',
      padding: '10px',
    },
    heading: {
      marginBottom: '20px',
      fontSize: '2rem',
    },
    jsonOutput: {
      backgroundColor: '#555',
      borderRadius: '5px',
      padding: '10px',
      margin: '10px 0',
      width: '80%',
      overflowX: 'auto',
    },
    noResults: {
      fontSize: '1.5rem',
    },
  };
export default SearchResults;
