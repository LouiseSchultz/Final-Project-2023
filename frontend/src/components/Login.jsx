import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { Link, useNavigate } from "react-router-dom/dist";
function LoginForm() {
  const navigate = useNavigate();

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

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    // Handle login form submission here, e.g., send data to the server for authentication.
    const { email, password } = loginData;
    try {
      const { data } = await axios.post("/login", {
        // payload
        email,
        password
      })
      if(data.error) {
        console.log(data.error)
        //toast.error(data.error)
      } else {
        setLoginData({})
      }
    } catch (error) {
      
    }
    navigate("/Landingpage");
    console.log("Login successful") //loginData);
  };

  return (
    // <div className="form-container">
    //   <h2>Login</h2>
    //   <form onSubmit={handleLoginSubmit} className="form">
    //     <div className="form-group">
    //       <label htmlFor="email">Email:</label>
    //       <input
    //         type="email"
    //         id="email"
    //         name="email"
    //         value={loginData.email}
    //         onChange={handleLoginChange}
    //         required
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="password">Password:</label>
    //       <input
    //         type="password"
    //         id="password"
    //         name="password"
    //         value={loginData.password}
    //         onChange={handleLoginChange}
    //         required
    //       />
    //     </div>
    //     <button type="submit" className="submit-button">
    //       Login
    //     </button>
    //     No account? <Link to="/Register">Registrieren</Link>
    //   </form>
    // </div>
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-primary mb-6">
          Login
        </h2>
        <form onSubmit={handleLoginSubmit} className="form">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
              className="input-primary block w-full mt-1 px-3 py-2 border rounded-md text-gray-800"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              className="input-primary block w-full mt-1 px-3 py-2 border rounded-md text-gray-800"
              required
            />
          </div>
          <button
            type="submit"
            className="btn-primary px-4 py-2 rounded-md text-white font-semibold hover:bg-orange-600 transition duration-300 ease-in-out">
            Login
          </button>
          <p className="text-gray-600 text-center">
            Kein Konto? <Link to="/Register">Registrieren</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
