// import React from "react";
// import "./bookdetails.css"; // You can create this CSS file for styling

// function BookDetails({ book }) {
//   return (
//     <div className="book-details">
//       <h2 className="book-title">{book.title}</h2>
//       <p className="book-author">{book.author}</p>

//       <p className="book-description">{book.description}</p>
//       <p className="book-price">Preis: {book.price} euro</p>
//       <img className="book-image" src={book.image} alt={book.title} />
//     </div>
//   );
// }

// export default BookDetails;

// BookDetailPage.js

// BookDetailPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookDetailPage({ match }) {
  const [book, setBook] = useState({});
  const { id } = match.params;

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await axios.get(`/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Fehler beim Abrufen der Buchdetails:', error);
      }
    }

    fetchBook();
  }, [id]);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Buchdetails hier mit book.title, book.author, usw. */}
      {book.title}
    </div>
  );
}

export default BookDetailPage;



