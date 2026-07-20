// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZ9_MqLo0b6tY2ja-QCV9uhQGG771zUxg",
    authDomain: "valora-90ee4.firebaseapp.com",
    projectId: "valora-90ee4",
    storageBucket: "valora-90ee4.firebasestorage.app",
    messagingSenderId: "86187038713",
    appId: "1:86187038713:web:1be8ca02c7b8e04d008f28",
    measurementId: "G-X1LFVEW44D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
