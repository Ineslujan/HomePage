import React from 'react';
import ArticleContent from '../../1-Atoms/ArticleContent/ArticleContent';
import ArticleTag from '../../1-Atoms/ArticleTag/ArticleTag';
import ArticleTitle from '../../1-Atoms/ArticleTitle/ArticleTitle';

import './home.scss';

function Home() {
  return (
    <section className="content">
      <ArticleTag />
      <ArticleTitle />
      <ArticleContent />
    </section>
  );
}

export default Home;
