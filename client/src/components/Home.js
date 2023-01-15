import React, { useEffect,useState } from "react";
import Header from "./Header";
import "../assets/css/Home.css";
// import app from '../services/firebase.js';

const Home = () => {

    
  
    
    //now we first check if the user is logged in by checking if firebase.auth().currentUser is defined. If it's not, we use the Redirect component to redirect the user to the login page. If it is defined, it means that the user is logged in and we can render the home page.
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //     app.auth().onAuthStateChanged(user => {
    //         if(user) {
    //             setIsLoggedIn(true);
    //         } else {
    //             setIsLoggedIn(false);
    //         }
    //     });
    // }, []);

    // if (!isLoggedIn) {
    //     // return <Redirect to="/login" />;
    //     window.location.href = "/login";
    // }

    return(
        <div>
            <Header/>
            <div className="home-container">
                <div className="bucket-content">
                    <h1 className="bucket-title">S3</h1>
                </div>
                <div className="drive-content">
                    <h1 className="drive-title">Google Drive</h1>
                </div>
            </div>
        </div>
    )
}

export default Home;