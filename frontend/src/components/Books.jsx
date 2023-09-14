
import React, { useState, useEffect } from "react";
import SearchBar from "./Searchbar.jsx"; // Assurez-vous que le chemin est correct
import axios from "axios";

function Books() {
  const [searchResults, setSearchResults] = useState([]);

  const fetchBooks = async (searchTerm) => {
    try {
      console.log(`/books/${searchTerm}`);
      // Effectuez une requête vers votre backend avec le terme de recherche
      const response = await axios.get(`/books/search/${searchTerm}`);
      //const data = await response.json();
      setSearchResults(response.data);
    } catch (error) {
      console.error('Fehler beim Abrufen der Buchdaten:', error);
    }
  };

  /*useEffect(() => {
    // Vous pouvez également initialiser les résultats avec une recherche vide ici
  }, []);*/

 
  return (
    <div>
      <h1>Buchliste</h1>
      <SearchBar
        placeholder="Enter a Book Name..."
        data={searchResults}
        onSearch={fetchBooks} // Ajoutez cette prop pour déclencher la recherche
      />

      <ul>
        {searchResults.map((book) => (
          <li key={book._id}>
            <div>
                <img
                  alt={`${book.title} book`}
                  src={`http://localhost:5000${book.image}`} // Hier den Pfad zum Bild anpassen
                />
                <div>
                <h3>{book.title}</h3>
                  <p>Autor: {book.author}</p>
                  <p>Beschreibung: {book.description}</p>
                  <p>Kategorie: {book.category}</p>
                </div>
              </div>
              <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
