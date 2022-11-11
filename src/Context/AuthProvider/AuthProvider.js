import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, reauthenticateWithCredential, sendPasswordResetEmail} from 'firebase/auth'
import app from '../../Firebase/Firebase.config';


 export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] =  useState(true);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const authInfo = {
    user, loading, createUser,
    }

    //observer (je user login hoyce ki hoynai ) 
    useEffect( ()=>{
       const unSubscribe =  onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser)
            setUser(currentUser)
        });
        return ()=>{
            return unSubscribe
        }
    }  , [])
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;