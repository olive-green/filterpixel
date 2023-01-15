import React, { useState } from 'react';
import classes from '../assets/css/RegisterPage.module.css';
import Header from './Header';
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
    // console.log(username.value,password.value)
    // handle form submission here, such as sending data to server
    axios.post("http://localhost:3001/filterpixel/register", {
      username: username.value,
      password: password.value
      }).then((response) => {
        if(response.status===201){

          alert("Registered successful")
          navigate("/home");
        }else if(response.status===409){
          console.log("User already exists")
        }
      }).catch((error) => {
          alert("Registration failed " + error)
          console.log("register error " + error.message)
      })

  };

  return (
    
    <div className={classes.pageContainer}>
      <Header isSignup={false}/>
      <form onSubmit={handleSubmit} className={classes.formContainer}>
        <div>
          <h2 className={classes.register}>Register a user</h2>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={classes.input}
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
            className={classes.input}
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
            className={classes.input}
            placeholder='Confirm Password'
          />
        </div>
        {error && <p className={classes.errorMessage}>{error}</p>}
        <button type="submit" className={classes.button}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
