import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
export const AuthContext= createContext();
const auth= getAuth(app);
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const providerLogin= (provider)=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const updateUserProfile =(profile)=>{
        return updateProfile(auth.currentUser,profile);
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            // console.log('user inside state changes',currentUser);
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }
    },[])


    const authInfo= {user ,loading,providerLogin,logOut,createUser,signIn,updateUserProfile,setLoading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;