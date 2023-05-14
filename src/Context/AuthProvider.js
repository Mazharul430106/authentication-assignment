import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.init';

const auth = getAuth()
export const AuthContext = createContext(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)


    // create user.
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user.
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout user.
    const logoutUser = () => {
        return signOut(auth)
    }

    // update User.
    const updateUser = (profile)=>{
        return updateProfile(auth.currentUser, profile)
    } 




    // user state difined
    useEffect(() => {
        const unsubScribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser);
        })
        return unsubScribe();
    }, [])



    const authInfo = { user, createUser, loginUser, logoutUser, updateUser };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;