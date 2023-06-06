import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { createContext } from "react";


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const user = "hello"
    const authInfo = {
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;