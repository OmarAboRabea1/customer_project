import React from 'react';
import { useParams } from 'react-router-dom';
import { articles } from '../../assests/Data';

export const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === parseInt(id!));

  if (!article) return <div>Article not found</div>;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleDetailPage;