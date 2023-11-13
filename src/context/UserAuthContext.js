import React, { createContext, useContext, useEffect, useState } from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from "firebase/auth"

import { auth } from '../firebase'
import { provider } from '../until/App2';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {

    const [user, setUser] = useState({});
    
    
    function SignUpUsingGoogle () {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                setUser(result);
                fetch('http://127.0.0.1:5000/createUser', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "uid": user.uid,
                        "email": user.email,
                        "username": user.displayName
                    })
                }).then((response) => {
                    if (response.status === 201) {
                        console.log("success");
                    }
                }).catch((error)=>{
                    console.log(error);
                })
                console.log({user})
            }).catch((error) => {
                console.log("error");
            });
    }  

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            console.log("Auth", currentuser);
            setUser(currentuser);
        })

        return () => {
            unsubscribe();
        }

    }, [])

  return (
    <userAuthContext.Provider value={{ user, logIn, signUp, logOut, SignUpUsingGoogle }}>
        {children}
    </userAuthContext.Provider>
  )
}

export function useUserAuth() {
    return useContext(userAuthContext);
}