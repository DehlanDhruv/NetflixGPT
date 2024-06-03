// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUJp-37AQn4A5tOfX0YSlgkr6IDtWms88",
  authDomain: "netflixgpt-d2fde.firebaseapp.com",
  projectId: "netflixgpt-d2fde",
  storageBucket: "netflixgpt-d2fde.appspot.com",
  messagingSenderId: "1038353030359",
  appId: "1:1038353030359:web:9e65e90b158486f561e492",
  measurementId: "G-MLZZ7W8NCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();