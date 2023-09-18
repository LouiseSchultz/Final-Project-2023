
import React, { useState } from "react";
// import "./styletest.css";
//import data from "../Data.json";
import BookDetails from "./BookDetails"; // Import the BookDetails component

function SearchBar({allBooks}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState([]);

  // Function to handle book selection
  const handleBookClick = (book) => {
    setSelectedBook(book);
    setSearchTerm(""); // Clear the search term when a book is clicked
  };

  const handleSearchBooks = async (searchTerm) =>{
    setSearchTerm(searchTerm);
    console.log(searchTerm)
    console.log(allBooks)
    const searchTermFilteredBooks = allBooks.filter((book) => {
      return book.title
        .toLowerCase()
        .startsWith(searchTerm.toLowerCase());
    })
    console.log("result" + searchTermFilteredBooks)
    setFilteredBooks(searchTermFilteredBooks)
  }

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
            onChange={(e)=>handleSearchBooks(e.target.value)}
          />
        </div>
        <div className="template_Container">
          {searchTerm !== "" && filteredBooks.length !== 0 &&
            filteredBooks
              .map((book) => {
                return (
                  <div
                    className="template"
                    key={book.id}
                    onClick={() => handleBookClick(book)} // Handle book click
                  >
                    <h3>{book.title}</h3>
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




