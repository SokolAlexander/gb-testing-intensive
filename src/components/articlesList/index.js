import React from 'react';
import Article from '../article';

export default class ArticlesList extends React.Component {
  renderArticle(article) {
    return (
      <Article
        key={article.id}
        article={article}
      />
    )
  }

  render() {
    const { articles } = this.props;

    return (
      <article>
        {articles.map(this.renderArticle)}
      </article>
    )
  }
}