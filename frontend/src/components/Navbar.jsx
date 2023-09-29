import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Kategorien from "./Kategorien.jsx";
import Contact from "./Contact"
import SearchBar from "./Searchbar.jsx";
import { useCart } from "./CartContext"; // Import useCart hook

function NavBar() {
  const [allBooks, setAllBooks] = useState([]);
  const { cart, getTotalPrice } = useCart(); // Use cart from the context

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

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="bg-primary py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to={"/"}
            className="text-white text-2xl font-semibold hover:text-secondary">
            Die Bücherecke
          </Link>
          <form className="relative flex items-center">
            <SearchBar allBooks={allBooks} />
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
              </svg>{" "}
            </button>
          </form>
          <ul className="flex space-x-6 text-white items-center">
            <li>
              <div className="group relative">
                <span
                  className="cursor-pointer hover:text-secondary"
                  onClick={toggleDropdown}>
                  Kategorien
                </span>
                <ul
                  className={`absolute bg-error text-secondary w-40 p-2 mt-2 space-y-2 rounded-lg shadow-lg ${
                    isDropdownOpen ? "" : "hidden"
                  }`}>
                  <li>Romane</li>
                  <li>Kinderbücher</li>
                  <li>Kochbücher</li>
                  <li>Lehrbücher</li>
                  {/* Weitere Kategorien hier hinzufügen */}
                </ul>
              </div>
            </li>
            <li className="hover:text-secondary">
              <Link to="/login">Login</Link>
            </li>
            <li className="hover:text-secondary">
              {" "}
              <Link to="/Contact">Kontakt</Link>
            </li>
            <li>
              <div className="flex-none">
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />{" "}
                      </svg>
                      <span className="badge badge-sm indicator-item">
                        {cart.reduce((total, item) => total + item.quantity, 0)}
                      </span>
                    </div>
                  </label>
                  <div
                    tabIndex={0}
                    className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                    <div className="card-body">
                      <span className="font-bold text-error">
                        Bücher:{" "}
                        {cart.reduce((total, item) => total + item.quantity, 0)}{" "}
                      </span>
                      <span className="text-error">
                        {" "}
                        Summe: {getTotalPrice().toFixed(2)} €
                      </span>
                      <div className="card-actions">
                        <Link to="/warenkorb">
                          {" "}
                          <button className="btn btn-error btn-block">
                            Zum Warenkorb
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
