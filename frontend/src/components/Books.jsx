import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchBooks() {
      setLoading(true);
      try {
        const response = await axios.get('/books'); // Stelle sicher, dass die URL korrekt ist
        setBooks(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Fehler beim Abrufen der Buchdaten:', error);
        setLoading(false);
      }
    }

    fetchBooks();
  }, []);

  return (
    <section>
      {loading ? (
        <p>Lade Bücher...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {books.map((book) => (
            <div key={book.id} className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
              <img
                  alt={`${book.title} book`}
                  src={`http://localhost:5000${book.image}`}
                  className="rounded-xl" // Hier den Pfad zum Bild anpassen
                />
              </figure>
              <div className=" card-body items-center text-center">
                <h2 className="card-title text-white">
                  {book.title}
                  <div className="badge badge-secondary text-xs">{book.category}</div>
                </h2>
                <p>{book.author}</p>
                <p className="text-lg font-medium">{book.price}</p>
                <div className="card-actions">
                  <Link to="/book-details" className="btn btn-primary">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Books;



<section>
      {/* <h1>Buchliste</h1>
      {loading ? (
        <p>Lade Bücher...</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <div>
                {/* <img
                  alt={`${book.title} book`}
                  src={`http://localhost:5000${book.image}`} // Hier den Pfad zum Bild anpassen
                />
      //           {/* {console.log(book.images.url)} */}
      {/* //           <div>
      //             <h3>{book.title}</h3>
      //             <p>Autor: {book.author}</p>
      //             <p>Beschreibung: {book.description}</p>
      //             <p>Kategorie: {book.category}</p>
      //           </div> 
      //         </div> */}
      {/* //         <hr />
      //       </li> */}
      {/* //     ))}
      //   </ul> */}
      {/* // )} */} 
    </section>
