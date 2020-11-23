import React from 'react';
import { connect } from 'react-redux';

import { getArticles } from '../../store/articles/middleware';
import Article from '../article';

class ArticlesList extends React.Component {
  componentDidMount() {
    console.log('---------', this.props);
    this.props.getArticles();
  }

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
    console.log(articles);

    return (
      <article>
        {articles.map(this.renderArticle)}
      </article>
    )
  }
}

const mapStateToProps = state => ({
  articles: state.articles.articles
});

const mapDispatchToProps = {
  getArticles,
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
