// pages/show-articles.tsx
import React from 'react';

const ShowArticles: React.FC = () => {
  // You can fetch and display your articles or content here
  const articles = [
    { title: 'Article 1', content: 'Content of Article 1' },
    { title: 'Article 2', content: 'Content of Article 2' },
    // Add more articles as needed
  ];

  return (
    <div>
      <h1>Show Current Articles</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowArticles;
