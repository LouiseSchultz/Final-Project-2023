import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Kategorien from "./Kategorien.jsx";
import SearchBar from "./Searchbar.jsx"

function NavBar() {
  return (
    <>
      <nav className="bg-primary py-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-white text-2xl font-semibold">
            Your Bookstore
          </a>
          <form className="relative">
            <SearchBar />
            {/* <input
              type="search"
              name="search"
              placeholder="Search for books"
              className="border-2 border-primary bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none search-input"
            /> */}

            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
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
          <ul className="flex space-x-6 text-white">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <Kategorien />
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="navbar">
        <div className="navbar-container">
          <p>
            <Link to="/">home</Link>
          </p>
          <p> {/* <Kategorien /> */}</p>
          <p>{/* <Link to="/login">Login</Link> */}</p>
          <p>
            {" "}
            <Link to="/warenkorb">Warenkorb</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default NavBar;
