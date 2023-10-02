import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Përdorimi i useParams për të marrë parametrat nga URL
  const { category } = useParams();

  useEffect(() => {
    async function fetchBooks() {
      setLoading(true);
      try {
        let response;

        // Përdorimi i parametrit të kategorisë nga URL për të formuar URL e kërkesës
        if (category) {
          response = await axios.get(`/books/category/${category}`); // Kërkesë për librathënie bazuar në kategori
        } else {
          response = await axios.get("/books"); // Kërkesë për të gjitha librathënie
        }

        setBooks(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Fehler beim Abrufen der Buchdaten:", error);
        setLoading(false);
      }
    }

    fetchBooks();
  }, [category]); // Shtoni "category" si varg të ndryshueshëm në listën e ndryshueshëm të përditësimit për të rifreskuar kërkesën kur ndryshon kategoria në URL.

  return (
    <section>
      {loading ? (
        <p>Lade Bücher...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {books.map((book, index) => (
            <div key={book._id} className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={`http://localhost:5000${book.image}`}
                  alt={`${book.title} book`}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-primary">
                  {book.title}
                </h2>
                <p>Autor: {book.author}</p>
                <p className="text-lg font-medium">{book.price} Euro</p>
                <div className="card-actions">
                  <Link
                    to={`/books/${book._id}`}
                    className="btn btn-primary">
                    Zum Buch
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
