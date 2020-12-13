import React from 'react';
import { connect } from 'react-redux';

import { getArticles } from '../../store/articles/middleware';
import Article from '../article';
import { REQUEST_STATUS } from '../../constants';

class ArticlesList extends React.Component {
  componentDidMount() {
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
    const { articles, requestStatus } = this.props;
    console.log(articles);

    if (requestStatus === REQUEST_STATUS.LOADING) {
      return (
        <span>Loading...</span>
      );
    }

    if (requestStatus === REQUEST_STATUS.FAILURE) {
      return (
        <span>Error getting articles</span>
      );
    }
      
    return <article>{articles.map(this.renderArticle)}</article>;
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles.articles,
  requestStatus: state.articles.request.status
});

const mapDispatchToProps = {
  getArticles,
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
