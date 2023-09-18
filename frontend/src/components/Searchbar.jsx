import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({ allBooks }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleBookClick = (book) => {
    // Navigieren Sie zur Buchdetails-Seite, indem Sie die Buch-ID an die URL anhängen
    console.log('hallo', book)
    navigate(`/books/${book._id}`);
  };

  const handleSearchBooks = async (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
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
        {/* Hier wird die Buchliste angezeigt */}
        {searchTerm !== "" && allBooks.length > 0 &&
          allBooks.map((book, index) => {
            return (
              <div
                className="template"
                key={index}
                onClick={() => handleBookClick(book)}
              
              >
                {console.log(book)}
                <h3>{book.title}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SearchBar;
