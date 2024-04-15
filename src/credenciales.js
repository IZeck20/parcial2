// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJWgAwfzUGubt52LJmOLg_PUH-rBzYSKM",
  authDomain: "parcial2-83600.firebaseapp.com",
  projectId: "parcial2-83600",
  storageBucket: "parcial2-83600.appspot.com",
  messagingSenderId: "1007843198630",
  appId: "1:1007843198630:web:6ef9f0694665a8a68c9667"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;