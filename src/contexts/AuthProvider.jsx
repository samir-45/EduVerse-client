import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init'

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
     const [theme, setTheme] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);

            // Use jwt 
            // if(currentUser?.email){
            //     const userData = {email: currentUser.email};
            //     axios.post('https://eduverse-server.vercel.app/jwt', userData, {
            //         withCredentials: true
            //     })
            //     .then(res => {
            //         console.log(res.data)
            //     })
            //     .catch(error => {
            //         console.log(error)
            //     })
            // }

            console.log('user in the on state change: ', currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        createUser,
        updateUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
        loading,
        setLoading,
        user,
        setUser,
        theme,
        setTheme
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;