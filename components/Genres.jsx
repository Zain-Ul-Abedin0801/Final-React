import React from "react";
import { Link } from "react-router-dom";

const Genres = () => {
  return (
    <div className="genres">
      <Link to="/fantasy" className="genre-link">Fantasy</Link>
      <Link to="/science" className="genre-link">Science</Link>
      <Link to="/finance" className="genre-link">Finance</Link>
    </div>
  );
};

export default Genres;
