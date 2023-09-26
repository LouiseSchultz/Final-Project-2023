import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/dist";
import Kategorien from "./Kategorien.jsx";
import SearchBar from "./Searchbar.jsx";

function NavBar() {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    loadAllBooks();
  }, []);

  const loadAllBooks = async () => {
    try {
      const data = await fetch("http://localhost:5000/books");
      const res = await data.json();
      setAllBooks(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="bg-primary py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"} className="text-white text-2xl font-semibold">
          Your Bookstore
        </Link>
        <form className="relative flex items-center">
          <SearchBar allBooks={allBooks} />
          <button type="submit" className="ml-2">
            <svg
              className="text-primary h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <path d="M21 21l-4.35-4.35"></path>
              <circle cx="10.5" cy="10.5" r="7.5"></circle>
            </svg>
          </button>
        </form>
        <div className="flex items-center space-x-6 text-white">
          <div className="daisy-dropdown">
            <a href="#" className="text-lg">
              Home
            </a>
          </div>
          <div className="daisy-dropdown">
            <Kategorien />
          </div>
          <div className="daisy-dropdown">
            <Link to="/login" className="text-lg">
              Login
            </Link>
          </div>
          <div className="daisy-dropdown">
            <Link to="/warenkorb" className="text-lg">
              Warenkorb
              <span className="badge badge-error ml-2">8</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
