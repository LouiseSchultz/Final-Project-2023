import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
  );
}

export default Books;
