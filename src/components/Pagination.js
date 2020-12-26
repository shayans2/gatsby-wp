import React from "react";
import { Link } from "gatsby";

const Pagination = ({ currentPage, pageCount, base = "" }) => {
  return (
    <nav className="pagination">
      {currentPage > 1 ? (
        <Link
          title="Go to previous page"
          to={`${base}/page/${currentPage - 1}`}
        >
          ← Newer posts
        </Link>
      ) : (
        <span />
      )}
      Page {currentPage} of {pageCount}
      {currentPage < pageCount ? (
        <Link title="Go to next page" to={`${base}/page/${currentPage + 1}`}>
          Older posts →
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
};

export default Pagination;
