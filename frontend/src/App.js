import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Books from "./components/Books";
import Kategorien from "./components/Kategorien";
import Register from "./components/Register";
import Landingpage from "./components/Landingpage";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import BookDetails from "./components/BookDetails";
import MyAccount from "./components/MyAccount";
import UserProfile from "./components/UserProfile";
import MyOrders from "./components/MyOrders";
import MyAddress from "./components/MyAddress";
import { UserProvider } from "./components/UserContext.jsx";

axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.withCredentials = true

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Landingpage />} />
          <Route path="/kategorien" element={<Kategorien />} />
          <Route path="/login" element={<Login />} />
          <Route path="/books/:bookId" element={<BookDetails />} />
          <Route path="/books" element={<Books />} />
          <Route path="/user-profile" element={ <UserProfile/>}>
          <Route path="" element={<MyAccount />} />
          <Route path="orders" element={<MyOrders />} />
          <Route path="addresses" element={<MyAddress />} />
        </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;