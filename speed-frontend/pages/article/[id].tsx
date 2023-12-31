import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';

interface ArticleType {
  title: string;
  abstract: string;
  // ... other properties of the article ...
}

const Article: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState<ArticleType | null>(null);

  useEffect(() => {
    if (id) {
      const fetchArticle = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/articles/${id}`);
          setArticle(response.data);
        } catch (error) {
          console.error('Error fetching article:', error);
        }
      };
      fetchArticle();
    }
  }, [id]);

  return (
    <div>
      <Navbar/>
      {article && (
        <div>
          <h1>{article.title}</h1>
          <p>{article.abstract}</p>
          {/* ... other details ... */}
        </div>
      )}
    </div>
  );
};

export default Article;
