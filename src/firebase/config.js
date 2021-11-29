// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz26hdpj-qA4qCIIqwsTgQT9A_1jmcPJc",
  authDomain: "react-e-commerce-3a401.firebaseapp.com",
  projectId: "react-e-commerce-3a401",
  storageBucket: "react-e-commerce-3a401.appspot.com",
  messagingSenderId: "469470165791",
  appId: "1:469470165791:web:6497f4275464c9c81cce2a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
