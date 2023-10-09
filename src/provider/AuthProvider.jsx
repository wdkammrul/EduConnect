/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config"
import { toast } from "react-toastify";

// step-3 
export const AuthContext = createContext(null)

// step-9 
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    // step-8 
    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)

    const googleAuth = new GoogleAuthProvider();

    const signInUsingPopup = () => {
        return signInWithPopup(auth, googleAuth)
            .then(res => toast('Successful Log In', res))
            .catch(err => toast('Try Again', err))
    }


    // step-10 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // step-21 
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // step-15 
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // step-14 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the state change', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    // step-6 
    const authInfo = {
        user,

        // step-11 next step-12 Register
        createUser,

        // step-16 next step-17 Navbar
        logOut,

        // step-22 next step-23 Login
        signIn,
        loading,
        signInUsingPopup

    }

    return (
        // step-4 next step-5 main.jsx
        // step-7 set value
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;