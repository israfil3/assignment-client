import React, { createContext, useEffect, useState } from 'react';
import { app } from '../../../firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true);

    const createUser = (email,password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin = () => {
        setLoader(true)
        return signInWithPopup(auth,provider)
    }
    const facebookLogin = () => {
        setLoader(true)
        return signInWithPopup(auth,GithubProvider)
    } ;
    
    const resetPassword = (email) => {
         return sendPasswordResetEmail(auth, email)
     }
 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,realUser => {
            setUser(realUser);
            setLoader(false)
        });
        return() => {
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loader,
        createUser,
        login,
        googleLogin,
        facebookLogin,
        resetPassword
    }
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;