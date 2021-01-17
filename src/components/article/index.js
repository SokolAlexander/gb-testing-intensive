import React, { useMemo } from "react";

import ArticlePlaceholder from "../articlePlaceholder";
import { formatDate } from "../../utils/formatDate";
import Favourite from "../favourite";
import "./styles.css";

export default function Article({ article, onAddToFav }) {
  const date = useMemo(() => new Date(article?.publishedAt), [
    article?.publishedAt,
  ]);
  const dateString = formatDate(date);

  if (!article) {
    return <ArticlePlaceholder />;
  }

  const { title, imageUrl, url, summary, newsSite } = article;

  return (
    <div className="post">

      <a href={url}>
        <div className="header">{title}</div>
        <div className="imageWrapper">
          <img className="image" src={imageUrl} alt={title} />
        </div>
        <div className="summary">{summary}</div>
        <div className="bottom">
          <div className="source">{newsSite}</div>
          <div className="date">{dateString}</div>
        </div>
      </a>
      <Favourite
        onClick={onAddToFav}
        articleId={article.id}
        favourite={article.favourite}
      />
    </div>
  );
}
