import React from "react";

import ArticlePlaceholder from "../articlePlaceholder";
import "./styles.css";

export default function Article({ article }) {
  if (!article) {
    return <ArticlePlaceholder />;
  }

  const { title, imageUrl, link, summary, source, date } = article;

  return (
    <a className="post" href={link}>
      <div className="header">{title}</div>
      <div className="imageWrapper">
        <img className="image" src={imageUrl} alt={title} />
      </div>
      <div className="summary">{summary}</div>
      <div className="bottom">
        <div className="source">{source}</div>
        <div className="date">{date}</div>
      </div>
    </a>
  );
}
