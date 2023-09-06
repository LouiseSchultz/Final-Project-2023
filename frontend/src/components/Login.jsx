import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

function LoginForm() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login form submission here, e.g., send data to the server for authentication.
    console.log("Login data submitted:", loginData);
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit} className="form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={loginData.email}
            onChange={handleLoginChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleLoginChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
        No account? <Link to="/Register">Registrieren</Link>
      </form>
    </div>
  );
}

export default LoginForm;
