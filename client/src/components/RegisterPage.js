import React, { useState } from 'react';
import '../assets/css/RegisterPage.css';

import {useNavigate} from 'react-router-dom';
import axios from "axios";

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password,confirmPassword } = e.target.elements;
    if (password.value !== confirmPassword.value) {
      setError('Passwords do not match');
      return;
    }
    console.log(username.value,password.value)
    // handle form submission here, such as sending data to server
    axios.post("/filterpixel/register", {
      username: username.value,
      password: password.value
      }).then((response) => {
          
          if (response.data.status === "success") {
              console.log("login successful")
              navigate("/home");
          }
      }).catch((error) => {
          console.log(error)
      })

  };

  return (
    <div className="page-container">
      <form onSubmit={handleSubmit} className="form-container">
        <div>
          {/* <label htmlFor="username">Username:</label> */}
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder='Username'
          />
        </div>
        <div>
          {/* <label htmlFor="password">Password:</label> */}
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder='Password'
          />
                </div>
        <div>
          {/* <label htmlFor="confirm-password">Confirm Password:</label> */}
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input"
            placeholder='Confirm Password'
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
