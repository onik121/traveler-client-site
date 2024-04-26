import { createContext, useState } from "react";


export const AuthContentx = createContext(null);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const info = { user}

    return (
        <AuthContentx.Provider value={info}>
            {children}
        </AuthContentx.Provider>
    );
};

export default AuthProvider;