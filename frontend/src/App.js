import React from "react";
import Kategorien from "./components/Kategorien";
import Register from "./components/Register";
import Searchbar from "./components/Searchbar";
import Landingpage from "./components/Landingpage";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Warenkorb from "./components/Warenkorb";
import BookData from "./Data.json";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {" "}
      <Router>
        {" "}
        <Searchbar placeholder="Enter a Book Name..." data={BookData} />
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<Landingpage />} />
          <Route path="/kategorien" element={<Kategorien />} />
          <Route path="/login" element={<Login />} />
          <Route path="/warenkorb" element={<Warenkorb />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
