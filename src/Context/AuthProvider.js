import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/Firebase.init';

const auth = getAuth()
export const AuthContext = createContext(app)

const AuthProvider = ({ children }) => {
    const user = { displayName: 'Mazharul Islam' }

    // create user.
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user.
    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }











    const authInfo = { user, createUser, loginUser };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;