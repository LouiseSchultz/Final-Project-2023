import React from "react";

function BookDetails({ book }) {
  return (
    <div className="book-details">
      <h2 className="book-title">{book.title}</h2>
      <p className="book-author">{book.author}</p>

      <p className="book-description">{book.description}</p>
      <p className="book-price">Preis: {book.price} euro</p>
      <img className="book-image" src={book.image} alt={book.title} />
    </div>
  );
}

export default BookDetails;

