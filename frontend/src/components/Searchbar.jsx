import React, { useState } from "react";
import BookDetails from './BookDetails'
import { useNavigate } from "react-router-dom";

function SearchBar({ allBooks }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const navigate = useNavigate();

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setSearchTerm("");
  };

  const handleSearchBooks = async (searchTerm) => {
    setSearchTerm(searchTerm);

    if (searchTerm.trim() === "") {
      setFilteredBooks([]); // Wenn das Suchfeld leer ist, zeige keine Ergebnisse
      return;
    }

    const searchTermFilteredBooks = allBooks.filter((book) => {
      return book.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setFilteredBooks(searchTermFilteredBooks);
  };

  const navigateToBookDetail = (book) => {
    const bookDetailUrl = `/book/${book.id}`;
    navigate(bookDetailUrl);
  };

  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            id="searchInput"
            type="text"
            placeholder="Search here..."
            className="border-2 border-primary bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none search-input"
            value={searchTerm}
            onChange={(e) => handleSearchBooks(e.target.value)}
          />
        </div>
        <div className="template_Container">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => {
              return (
                <div
                  className="template"
                  key={book.id}
                  onClick={() => navigateToBookDetail(book)}
                >
                  {selectedBook && <BookDetails book={selectedBook} />}
                  {/* <h3>{book.title}</h3> */}
                </div>
              );
            })
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>

    </>
  );
}

export default SearchBar;
