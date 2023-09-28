import React, {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom/dist";

function SearchBar({ allBooks }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const navigate = useNavigate();

  const handleBookClick = (book) => {
    // Navigieren Sie zur Buchdetails-Seite, indem Sie die Buch-ID an die URL anhängen
    console.log('hallo', book)
    setList([]);
    setSearchTerm("");
    navigate(`/books/${book._id}`);
  };

  useEffect(() => {
    const searchTermFilteredBooks = allBooks.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(searchTermFilteredBooks);
  }, [searchTerm, allBooks]);

  const [list, setList] = useState([]);

  useEffect(() => {
    const res = allBooks.map((book) => book.title); // Hier verwende ich den Buchtitel als Basis für die Vorschläge
    const uniqueTitles = [...new Set(res)]; // Entferne doppelte Titel
    const filteredTitles = uniqueTitles.filter((title) =>
      title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setList(filteredTitles);
  }, [searchTerm, allBooks]);

  return (
    
      <div className="wrapper">
        <input
          id="searchInput"
          type="text"
          placeholder="Search here..."
          className="input input-bordered input-primary w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      
      <div className="template_Container grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Hier wird die Buchliste angezeigt */}
        <div id="dropdown" className={` ${searchTerm !== "" ? "active" : "hidden"} z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">        
            {searchTerm !== "" && allBooks.length > 0 &&
              filteredBooks.map((book, index) => {
                return(
                  <li>
                          <button 
                            key={book.title}
                            onClick={() => handleBookClick(book)}
                            type="button" 
                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{book.title}</button>
                  </li> 
                )
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
