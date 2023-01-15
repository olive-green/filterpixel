import React from "react";
import '../assets/css/Header.css';
import {Link} from "react-router-dom";


const Header = () => {
    const companyLogo="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ebysgk4unsjjfuq1hhsx"
    return(
    <header className="header">
        <div className="company-container">
        <img src={companyLogo} alt="Company Logo" className="company-logo" />
        <h1 className="company-name">FilterPixel</h1>

        </div>
        <div className="signup-button">
          {/* <a href="#" className="signup-button"> */}
            
            <Link to="/register">Sign Up</Link>
            {/* </a> */}
        </div>
      </header>
    )
}

export default Header;