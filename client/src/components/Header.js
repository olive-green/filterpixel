import React from "react";
import classes from '../assets/css/Header.module.css';
import {Link} from "react-router-dom";


const Header = (props) => {
    const companyLogo="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ebysgk4unsjjfuq1hhsx"
    return(
    <header className={classes.header}>
        <div className={classes.companyContainer}>
        <img src={companyLogo} alt="Company Logo" className={classes.companyLogo} />
        <h1 className={classes.companyNamee}>FilterPixel</h1>

        </div>
        <div className={classes.signupContainer}>
           {props.isSignup ? <Link to="/register" className={classes.signupButton}>Sign Up</Link> :
           <Link to="/" className={classes.signupButton}>Sign in</Link>
    }
        </div>
      </header>
    )
}

export default Header;