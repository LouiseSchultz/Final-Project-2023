import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Kategorien from "./Kategorien.jsx";
import SearchBar from "./Searchbar.jsx";
import { useCart } from "./CartContext"; // Import useCart hook
import logo from "./logo.png";

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
          <div className="flex items-center"> {/* Logo und Titel hier */}
            <div className="rounded-full overflow-hidden w-20 h-20 mr-2">
              <img src={logo} alt="logo" className="w-full h-full" />
            </div>
            <Link to={"/"} className="text-white text-2xl font-semibold hover:text-black">
              Die Bücherecke
            </Link>
          </div>
          <form className="relative flex items-center">
            <SearchBar allBooks={allBooks} />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              {/* Suche Symbol hier */}
            </button>
          </form>
          <ul className="flex space-x-6 text-white items-center"> {/* Ändere flex und füge items-center hinzu */}
            <li className="hover:text-black">Home</li>
            <li>
              <div className="group relative">
                <span
                  className="cursor-pointer hover:text-black"
                  onClick={toggleDropdown}
                >
                  Kategorien
                </span>
                <ul
                  className={`absolute bg-white text-black w-40 p-2 mt-2 space-y-2 rounded-lg shadow-lg ${
                    isDropdownOpen ? "" : "hidden"
                  }`}
                >
                  <li>Romane</li>
                  <li>Kinderbücher</li>
                  <li>Kochbücher</li>
                  <li>Lehrbücher</li>
                  {/* Weitere Kategorien hier hinzufügen */}
                </ul>
              </div>
            </li>
            <li className="hover:text-black">
              <Link to="/login">Login</Link>
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
                        stroke="currentColor"
                      >
                        {/* Restliches SVG hier */}
                      </svg>
                      <span className="badge badge-sm indicator-item">
                        {cart.reduce((total, item) => total + item.quantity, 0)}
                      </span>
                    </div>
                  </label>
                  <div
                    tabIndex={0}
                    className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                  >
                    <div className="card-body">
                      <span className="font-bold text-error">
                        Items:{" "}
                        {cart.reduce((total, item) => total + item.quantity, 0)}{" "}
                      </span>
                      <span className="text-error">
                        {" "}
                        Total Price: {getTotalPrice().toFixed(2)} euro
                      </span>
                      <div className="card-actions">
                        <button className="btn btn-primary btn-block">
                          <Link to="/warenkorb"> Zum Warenkorb</Link>
                        </button>
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
