import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, reauthenticateWithCredential, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../Firebase/Firebase.config';


 export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();



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
    //google signIN 
    const googleSignIn = ()=>{
        setLoading(true)
       return  signInWithPopup(auth, googleProvider)
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
    user, loading, createUser,signIn , logOut , googleSignIn
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;