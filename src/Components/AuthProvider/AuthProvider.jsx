import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { createContext, useState } from "react";


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const CreateUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserprofile = (name, photo) => {
        return updateProfile(auth.currentUser, {
             displayName: name, photoURL: photo
           })
     }

    const authInfo = {
        user,
        updateUserprofile,
        CreateUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;