// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLxXvkTF1pCWlGZlinv5GkcKBZ0cQ_72o",
  authDomain: "warehouse-65721.firebaseapp.com",
  projectId: "warehouse-65721",
  storageBucket: "warehouse-65721.appspot.com",
  messagingSenderId: "797554046229",
  appId: "1:797554046229:web:586779ee037efb378de51c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;