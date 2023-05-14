import React, { createContext, useEffect, useState } from 'react';
import {
    getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, onAuthStateChanged,
    signOut, updateProfile, signInWithPopup
} from "firebase/auth";
import app from '../Firebase/Firebase.init';

const auth = getAuth()
export const AuthContext = createContext(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    // google login 
    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    // create user.
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user.
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout user.
    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // update User.
    const updateUser = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    // user state difined
    useEffect(() => {
        const unsubScribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser);
            setLoading(false)
        })
        return unsubScribe();
    }, [])



    const authInfo = { user, createUser, loginUser, logoutUser, updateUser, providerLogin, loading };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;