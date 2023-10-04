import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
//import { useDispatch } from 'react-redux';
//import { loginUser } from './AuthSlice.jsx';
import { useUser } from "./UserContext.jsx";

function LoginForm() {
    const navigate = useNavigate();
    const { updateUserData } = useUser();

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
<div className="alert alert-warning">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  <span>Warning: Invalid email address!</span>
</div>
        console.log(data.error)
       
      } else {
        setLoginData({})
        navigate("/user-profile");

        const userData = { email: data.email, name: data.vorName, strasse: data.strasse, hausnummer: data.hausNummer, postleitzahl: data.postleitzahl, ort: data.ort };
        updateUserData(userData);

        
        console.log("Login successful") //loginData);

       
      }
    } catch (error) {
      console.log("Login failed", error);
    }
   
    //console.log("Login successful") //loginData);
  };

  return (

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