import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/Firebase.init';

const auth = getAuth()
export const AuthContext = createContext(app)

const AuthProvider = ({ children }) => {

    const user = { displayName: 'Mazharul Islam' }
    const authInfo = {user};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;