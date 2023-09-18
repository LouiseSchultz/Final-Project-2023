import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Books from "./components/Books";
import Kategorien from "./components/Kategorien";
import Register from "./components/Register";
import Landingpage from "./components/Landingpage";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import BookDetails from "./components/BookDetails"; // Importieren Sie die BookDetails-Komponente
import Warenkorb from "./components/Warenkorb"
axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.withCredentials = true

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Landingpage />} />
          <Route path="/warenkorb" element={<Warenkorb />} />

          <Route path="/kategorien" element={<Kategorien />} />
          <Route path="/login" element={<Login />} />
          <Route path="/books/:bookId" element={<BookDetails />} />

          <Route path="/books" element={<Books />} /> {/* Annahme: Route für die Buchliste */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
