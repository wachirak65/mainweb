import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCpi8REX9TKnBUUjcDIXuTUVaVVWJmOY2k",
    authDomain: "projectweb-ff29d.firebaseapp.com",
    projectId: "projectweb-ff29d",
    storageBucket: "projectweb-ff29d.appspot.com",
    messagingSenderId: "480636001731",
    appId: "1:480636001731:web:91a0cde0165b10049c7176",
    measurementId: "G-LB667V04VV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 

const provider = new GoogleAuthProvider()
export const signInWithGoogle = () =>{
    signInWithPopup(auth,provider)
    .then((result)=>{
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('profilePic', profilePic);
    })
    .catch((error) =>{
        console.log(error);
    });
}
