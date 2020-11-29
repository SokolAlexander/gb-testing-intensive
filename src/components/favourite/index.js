import React, { useCallback } from "react";

function Favourite({ favourite, articleId, onClick }) {
  const handleClick = useCallback(() => {
    onClick(articleId);
  }, [articleId, onClick]);

  return (
    <button
      onClick={handleClick}
    >
      {favourite ? "-" : "+"}
    </button>
  );
}

export default React.memo(Favourite);
