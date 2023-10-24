import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1n5GjyWpRr4sC3mo9AjL0SkOH3KC5ZVI",
    authDomain: "basic-web-2b71e.firebaseapp.com",
    projectId: "basic-web-2b71e",
    storageBucket: "basic-web-2b71e.appspot.com",
    messagingSenderId: "60043802817",
    appId: "1:60043802817:web:856b2ee4dd83137709bc40",
    measurementId: "G-B4EZK9WLJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
export { auth};