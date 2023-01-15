import firebase from "firebase";

// import {getAuth,GoogleAuthProvider} from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   databaseURL: "YOUR_DATABASE_URL",
//   projectId: "filterpixel-eb582",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };
const firebaseConfig = {

    apiKey: "AIzaSyB4NSYBZkMvrgXqXC0Q74gQ0kTXUfT-40g",
  
    authDomain: "filterpixel-eb582.firebaseapp.com",
  
    projectId: "filterpixel-eb582",
  
    storageBucket: "filterpixel-eb582.appspot.com",
  
    messagingSenderId: "736734981271",
  
    appId: "1:736734981271:web:8edb0fbd8f98cfb5510dd2",
  
    measurementId: "G-L45X5XQQFR"
  
  };
  
 

const app=firebase.initializeApp(firebaseConfig);
// const auth=getAuth(app);
// const provider= new GoogleAuthProvider

export default app;
