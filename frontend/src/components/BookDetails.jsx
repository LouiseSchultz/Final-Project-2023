import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BookDetails() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  

  useEffect(() => {
    async function fetchBookDetails() {
      try {
        const response = await axios.get(`http://localhost:5000/books/${bookId}`);
        setBook(response.data);
        //console.log(response.data)
      } catch (error) {
        console.error('Fehler beim Abrufen der Buchdaten:', error);
      }
    }

    console.log(bookId)
    fetchBookDetails();
  }, [bookId]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-details">
      <h2 className="book-title">{book.title}</h2>
      <p className="book-author">{book.author}</p>
      <p className="book-description">{book.description}</p>
      <p className="book-price">Preis: {book.price} Euro</p>
      <img className="book-image" src={book.image} alt={book.title} />
      {/* Hier die Schaltfläche oder Logik zum Hinzufügen zum Warenkorb hinzufügen */}
    </div>
  );
}

export default BookDetails;
