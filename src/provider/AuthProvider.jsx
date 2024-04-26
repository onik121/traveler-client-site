import { createContext, useState } from "react";
import auth from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export const AuthContentx = createContext(null);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const info = { user, createUser, loginUser }

    return (
        <AuthContentx.Provider value={info}>
            {children}
        </AuthContentx.Provider>
    );
};

export default AuthProvider;