
import React, { useState } from "react";
// import "./styletest.css";
import data from "../Data.json";
import BookDetails from "./BookDetails"; // Import the BookDetails component

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  // Function to handle book selection
  const handleBookClick = (book) => {
    setSelectedBook(book);
    setSearchTerm(""); // Clear the search term when a book is clicked
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
            value={searchTerm} // Use value instead of onChange
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="template_Container">
          {searchTerm !== "" &&
            data
              .filter((val) => {
                return val.title
                  .toLowerCase()
                  .startsWith(searchTerm.toLowerCase());
              })
              .map((val) => {
                return (
                  <div
                    className="template"
                    key={val.id}
                    onClick={() => handleBookClick(val)} // Handle book click
                  >
                    <h3>{val.title}</h3>
                  </div>
                );
              })}
        </div>
      </div>

      {/* Conditionally render BookDetails component */}
      {selectedBook && <BookDetails book={selectedBook} />}
    </>
  );
}

export default SearchBar;




