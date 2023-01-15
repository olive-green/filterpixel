import React, { useEffect,useState } from "react";
import Header from "./Header";
import classes from "../assets/css/Home.module.css";
import axios from "axios";

const Home = () => {

    const [data,setData]=useState("");
    
    //now here fetches data
    useEffect(()=>{
        axios.get("http://localhost:3001/filterpixel/bucketData").
        then((result) => {
            console.log(result)
            return result.json();
            // console.log(JSON.parse(response.data));
            // // setData(response.data)
        })
        .then((data) => {
            console.log(data);
            // setData(data);
        })
        .catch((error) => {
            console.log(error.message)
        })
    }
,[])
    

    return(
        
            <div className={classes.homeContainer}>
            <Header/>
                <div className={classes.bucketContent}>
                    <h1 className={classes.bucketTitle}>S3</h1>
                </div>
                <div className={classes.driveContent}>
                    <h1 className={classes.driveTitle}>Google Drive</h1>
                </div>
            </div>
        
    )
}

export default Home;