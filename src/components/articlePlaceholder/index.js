import React from "react";

import "./styles.css";

export default function ArticlePlaceholder() {
  return (
    <div className="post-empty">
      <div className="header">HEADER OF THE TITLE</div>
      <div className="image">IMAGE WILL GO HERE</div>
      <div className="summary">SUMMARYSSSS</div>
      <div className="bottom">
        <div className="source">SOURCE</div>
        <div className="date">DATE</div>
      </div>
    </div>
  );
}
