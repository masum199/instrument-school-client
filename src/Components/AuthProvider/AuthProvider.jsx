import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const CreateUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserprofile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const LogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            // if (currentUser) {
            //     axios.post('https://school-server-side.vercel.app/jwt', {
            //         email: currentUser?.email
            //     })
            //         .then(data => {
            //             localStorage.setItem('access-token', data.data.token)
            //             
            //         })
            // } else {
            //     localStorage.removeItem('access-token')
            //             setLoading(false)
            // }
            // console.log('current user', currentUser)

        })
        return () => {
           return unsubscribe()
        }

    }, [])

    const logOut = () => {
        setLoading(true)
        localStorage.removeItem('access-token')
        return signOut(auth)
    }

    console.log(user)

    const authInfo = {
        user,
        updateUserprofile,
        CreateUser,
        LogIn,
        googleSignIn,
        logOut,
        loading,
        setLoading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;