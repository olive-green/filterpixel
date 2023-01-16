// server.js
const express = require('express');
const {
    S3Client,
    ListObjectsCommand,GetObjectCommand
} = require("@aws-sdk/client-s3");

const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();
//import user model 
const User=require("./models/user");
const bcrypt=require("bcrypt");


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://pankaj:pankaj123@cluster0.82akh.mongodb.net/filterpixel?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));





// Register endpoint
app.post('/filterpixel/register', async (req, res) => {
    try {
        // console.log(req.body)
        const existingUser = await User.findOne( {username:req.body.username});
        console.log("existingUser" + existingUser);
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }
      // Hash the password
      const salt=await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      // Create user object with hashed password
      const user = await User.create({
        username: req.body.username,
        password: hashedPassword
      });
      
      // ...
      console.log(user)
      res.status(201).json({user, message: 'User created successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // Login endpoint
  app.post('/filterpixel/login', async (req, res) => {
    try {
      // Find user by username 
      const user = await User.findOne( {username:req.body.username});
      // Compare password
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      console.log(user);    
      res.status(200).json({ user, message: 'Login successful' });
    } catch (err) {
      res.status(401).json({ error: err.message });
    }
  });
  
app.get("/filterpixel/bucketData",async (req,res)=>{
    // Set the AWS Region.
    const REGION = "ap-south-1";
    // Create an Amazon S3 service client object.
    const s3Client = new S3Client({
        region: REGION,
        signer: {
            sign: async (request) => request
        }
    });
    // Set the parameters
    const bucketParams = {
        Bucket: "testbucketfp",
        
    };
    
    
    try {
        const data = await s3Client.send(new ListObjectsCommand(bucketParams));
        console.log("Success", data);
        res.status(200).json({data});
    } catch (err) {
        console.log("Error", err);
    }
    
})

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
