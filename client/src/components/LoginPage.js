import React, { useState,useEffect } from 'react';
import classes from '../assets/css/Login.module.css';
import Header from './Header';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import "../fpLogo.svg"
const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    
    const googleLogo = 'https://cdn-teams-slug.flaticon.com/google.jpg';

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle form submission here
        
        const { username, password } = e.target.elements;
        axios.post("http://localhost:3001/filterpixel/login", {
            username: username.value,
            password: password.value
        }).then((response) => {
            // console.log(response)
            console.log("login successful")
            navigate("/home");
              
        }).catch((error) => {
            alert("Login failed " + error)
            console.log(error.message)
        })
    };

    

    const handleGoogleLogin = () => {
        // Handle Google login here
        // ...
    };

    return (
        <div className={classes.pageContainer}>
            <Header isSignup={true}/>
            <div className={classes.formContainer}>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <div>
                        <button type="button" className={classes.googleButton} onClick={handleGoogleLogin}>
                        <i className="fa fa-google"></i>
                            Login with Google
                        </button>
                    </div>
                    <div className={classes.divider}>
                         OR 
    
                    </div>
                    <div>

                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            className={classes.input}
                        />
                    </div>
                    <div>

                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className={classes.input}
                        />
                    </div>
                    <button type="submit" className={classes.button}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
