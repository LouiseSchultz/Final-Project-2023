import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({ allBooks }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const navigate = useNavigate();

  const handleBookClick = (book) => {
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
    const res = allBooks.map((book) => book.title);
    const uniqueTitles = [...new Set(res)];
    const filteredTitles = uniqueTitles.filter((title) =>
      title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setList(filteredTitles);
  }, [searchTerm, allBooks]);

  return (
    <div className="wrapper relative">
      <input
        id="searchInput"
        type="text"
        placeholder="Search here..."
        className="input input-bordered input-primary w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm !== "" && (
        <div className="absolute left-0 mt-2 w-full bg-white border rounded-lg shadow-lg">
          <ul className="py-2 text-sm text-gray-700">
            {filteredBooks.map((book, index) => (
              <li key={book.title}>
                <button
                  onClick={() => handleBookClick(book)}
                  type="button"
                  className="block w-full px-4 py-2 hover:bg-gray-100">
                  {book.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBar;