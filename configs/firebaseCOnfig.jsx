// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "my-project-a6dc1.firebaseapp.com",
    projectId: "my-project-a6dc1",
    storageBucket: "my-project-a6dc1.firebasestorage.app",
    messagingSenderId: "592965172547",
    appId: "1:592965172547:web:8d28d574ebdd7c295943f6",
    measurementId: "G-VB5R43HBH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);