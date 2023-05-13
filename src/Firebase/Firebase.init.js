// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHza2Y_ywhxz8hmhwFol9LDz5mjU1IUEo",
    authDomain: "authentication-website-f2889.firebaseapp.com",
    projectId: "authentication-website-f2889",
    storageBucket: "authentication-website-f2889.appspot.com",
    messagingSenderId: "12091905851",
    appId: "1:12091905851:web:0b0c61b41bf112648e891e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;