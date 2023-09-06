import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Kategorien from "./Kategorien.jsx";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <p>
          <Link to="/">home</Link>
        </p>
        <p>
          {" "}
          <Kategorien />
        </p>
        <p>
          <Link to="/login">Login</Link>
        </p>
        <p>
          {" "}
          <Link to="/warenkorb">Warenkorb</Link>
        </p>
      </div>
    </div>
  );
}

export default NavBar;
