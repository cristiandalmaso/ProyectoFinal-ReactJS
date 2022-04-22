
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4db_3nXaPM2tj9kDCgOf0p6324U0tmds",
  authDomain: "proyectofirebase-f085a.firebaseapp.com",
  projectId: "proyectofirebase-f085a",
  storageBucket: "proyectofirebase-f085a.appspot.com",
  messagingSenderId: "1052249864246",
  appId: "1:1052249864246:web:9d583d9cf74b0f5a280097"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = ()=>{
    return app;
}