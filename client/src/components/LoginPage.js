import React, { useState } from 'react';
import '../assets/css/Login.css';
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
        axios.post("/filterpixel/login", {
            username: username.value,
            password: password.value
        }).then((response) => {
            console.log(response)
            if (response.data.status === "success") {
                console.log("login successful")
                navigate("/home");
            }   
        }).catch((error) => {
            console.log(error)

        })
    };

    

    const handleGoogleLogin = () => {
        // Handle Google login here
        // ...
    };

    return (
        <div className="page-container">
            <Header />
            <div className="form-container">
                <form onSubmit={handleSubmit} className="form">
                    <div>
                        <button type="button" className="google-button" onClick={handleGoogleLogin}>
                            <img src={googleLogo} alt="Google Logo" className="google-logo" />
                            Login with Google
                        </button>
                    </div>
                    <div className="divider">
                        <span className="divider-text">OR</span>
                    </div>
                    <div>

                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            className="input"
                        />
                    </div>
                    <div>

                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="input"
                        />
                    </div>
                    <button type="submit" className="button">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
