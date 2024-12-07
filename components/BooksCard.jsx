import React from "react";
import { cart } from "../Data/Cart";  

const BookCard = ({ book }) => {
  const addToCart = (bookId, button) => {
    let matchingBook = cart.find((item) => item.bookId === bookId);

    if (matchingBook) {
      matchingBook.quantity += 1;
    } else {
      cart.push({
        bookId: bookId,
        quantity: 1
      });
    }
    saveToStorage();

    const addedMessage = button.previousElementSibling;
    addedMessage.style.opacity = 1;

    setTimeout(() => {
      addedMessage.style.opacity = 0;
    }, 1000);
  };

  const saveToStorage = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div className="book-info">
      <img className="book-image" src={book.image} alt="Book Image" />
      <div className="info">
        <p className="title">{book.title}</p>
        <p style={{ margin: 0 }}>
          <span>by </span><span className="author"><strong>{book.author}</strong></span>
        </p>
        <p className="stats">{book.stats}</p>
        <p className="price">${book.price}</p>
        <span className="added" id="addedMessage">Added to Cart &#10004;</span>
        <button
          className="cart-button js-cart-button"
          data-book-id={book.id}
          onClick={(e) => addToCart(book.id, e.target)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookCard;
