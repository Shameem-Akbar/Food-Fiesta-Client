import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config'

export const AuthContext = createContext(null);
const auth = getAuth(app);
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const handleGoogleSignIn = (googleProvider) => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    };

    const handleGithubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser);
            })
            .catch(error => {
                console.log('error', error);
            })
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }


    }, [])

    const authInfo = {
        user, createUser, signIn, logOut, loading, handleGoogleSignIn, handleGithubSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;