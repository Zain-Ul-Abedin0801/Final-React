import React from "react";
import { fantasybooks } from "../Data/Books";
import BookCard from "../BookCard";

const Fantasy = () => {
  return (
    <div className="main">
      <div className="top2">
        <p>
          <span className="check">Fantasy</span>
          <span className="item"> Books</span>
        </p>
      </div>
      <div className="js-rack">
        {fantasybooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Fantasy;
