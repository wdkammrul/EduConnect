import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config"

// step-3 
export const AuthContext = createContext(null)

// step-9 
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    // step-8 
    const [user, setUser] = useState(null)

    // step-10 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // step-21 
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // step-15 
    const logOut = () => {
        return signOut(auth);
    }

    // step-14 
    useEffect(() => {
      const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            console.log('user in the state change', currentUser)
            setUser(currentUser)
        })
        return () =>{
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
        signIn
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