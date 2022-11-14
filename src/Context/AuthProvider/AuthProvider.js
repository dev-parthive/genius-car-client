import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, reauthenticateWithCredential, sendPasswordResetEmail, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../../Firebase/Firebase.config';


 export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] =  useState(true);
    //crearte user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //login user 
    const signIn = (email, password) =>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
        
    } 

    // signOut or logout 
    const logOut = () =>{
        return signOut(auth)
    }

    
    //observer (je user login hoyce ki hoynai ) 
    useEffect( ()=>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser)
            setUser(currentUser);
            setLoading(false)
        });
        return ()=>{
            return unSubscribe
        }
    }  , [])

    //authINfo
    const authInfo = {
    user, loading, createUser,signIn , logOut
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;