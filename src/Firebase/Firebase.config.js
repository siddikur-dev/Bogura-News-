// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4DxOYb_hLHgGQ55S6p-i7uC3wBsuNoL8",
  authDomain: "bogura-news-f2d09.firebaseapp.com",
  projectId: "bogura-news-f2d09",
  storageBucket: "bogura-news-f2d09.firebasestorage.app",
  messagingSenderId: "959769926675",
  appId: "1:959769926675:web:887f178cefc7d1a7a8f3e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
