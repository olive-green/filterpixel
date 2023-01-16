import React, { useEffect, useState } from "react";
import Header from "./Header";
import classes from "../assets/css/Home.module.css";
import axios from "axios";

const Home = () => {

    const [data, setData] = useState(null);

    //now here fetches data
    useEffect(() => {
        axios.get("http://localhost:3001/filterpixel/bucketData").
            then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
        , [])
    let images="";
    if (data != null) {
        // console.log(data)
        const imageUrls = data.data.Contents.map(imageData => {
            return `https://s3.console.aws.amazon.com/s3/buckets/testbucketfp/${imageData.Key}`;
        });
        console.log(imageUrls);
         images = imageUrls.map((imageUrl, index) => {
            return <img key={index} src={imageUrl} alt="My Image" />
        });

    }


    return (

        <div className={classes.homeContainer}>
            <Header />
            <div className={classes.bucketContent}>
                <h1 className={classes.bucketTitle}>S3</h1>
                <div className={classes.imageGallery}>
                    {images}
                </div>
            </div>
            {/* <div className={classes.driveContent}>
                    <h1 className={classes.driveTitle}>Google Drive</h1>
                </div> */}
        </div>

    )
}

export default Home;