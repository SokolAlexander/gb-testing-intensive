import React from 'react';
import { connect } from 'react-redux';

import { getArticles } from '../../store/articles/middleware';
import { toggleFavourite } from '../../store/articles/actions';
import Article from '../article';
import { REQUEST_STATUS } from '../../constants';

class ArticlesList extends React.Component {
  componentDidMount() {
    this.props.getArticles();
  }

  renderArticle = (article) => {
    const { toggleFavourite } = this.props;
    return <Article key={article.id} article={article} onAddToFav={toggleFavourite} />;
  }

  render() {
    const { articles, articlesStatus } = this.props;
    if (articlesStatus === REQUEST_STATUS.FAILURE) {
      return <span className="error">Error</span>
    }

    return (
      <article>
        {articles.map(this.renderArticle)}
      </article>
    )
  }
}

const mapStateToProps = state => ({
  articles: state.articles.articles,
  articlesStatus: state.articles.request.status,
});

const mapDispatchToProps = {
  getArticles,
  toggleFavourite,
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
