import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function Searchbar({ placeholder }) {
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [suggestionsActive, setSuggestionsActive] = useState(false);
  const [value, setValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    if (value.length > 1) {
      // API-Anfrage an das Backend, um Bücher abzurufen
      axios.get(`/books/search/${value}`)
        .then((response) => {
          setFilteredData(response.data);
          setSuggestions(response.data.map((book) => book.title));
          setSuggestionsActive(true);
        })
        .catch((error) => {
          console.error('Fehler beim Abrufen der Bücher:', error);
        });
    } else {
      setFilteredData([]);
      setSuggestions([]);
      setSuggestionsActive(false);
    }
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 38) {
      // UP ARROW
      if (suggestionIndex > 0) {
        setSuggestionIndex(suggestionIndex - 1);
      }
    } else if (e.keyCode === 40) {
      // DOWN ARROW
      if (suggestionIndex < suggestions.length - 1) {
        setSuggestionIndex(suggestionIndex + 1);
      }
    } else if (e.keyCode === 13) {
      // ENTER
      if (suggestions.length > 0) {
        setValue(suggestions[suggestionIndex]);
        setSuggestions([]);
        setSuggestionsActive(false);
        setSelectedBook(filteredData[suggestionIndex]);
      }
    }
  };

  const selectBook = (book) => {
    setValue(book.title);
    setSelectedBook(book);
    setSuggestions([]);
    setSuggestionsActive(false);
  };

  const clearInput = () => {
    setValue("");
    setFilteredData([]);
    setSelectedBook(null);
    setSuggestions([]);
    setSuggestionsActive(false);
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {suggestionsActive && (
          <ul className="suggestions">
            {suggestions.map((suggestion, index) => (
              <li
                className={index === suggestionIndex ? "active" : ""}
                key={index}
                onClick={() => selectBook(filteredData[index])}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      {selectedBook && (
        <div className="selectedBook">
          <h2>{selectedBook.title}</h2>
          {/* Weitere Buchinformationen anzeigen */}
          <button onClick={clearInput}>Zurück zur Suche</button>
        </div>
      )}
    </div>
  );
}

export default Searchbar;
