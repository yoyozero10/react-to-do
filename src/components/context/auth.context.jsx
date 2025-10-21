import { createContext, useState } from "react";

export const AuthContext = createContext({
    user: {
        "_id": "",
        "username": "",
        "email": ""
    },
    setUser: () => {},
});

export const AuthWrapper = ({ children }) => {
    const [user, setUser] = useState({
        "_id": "",
        "username": "",
        "email": ""
    });
    
    const [isAppLoading, setIsAppLoading] = useState(true);

    return (
        <AuthContext.Provider value={{ user, setUser, isAppLoading, setIsAppLoading }}>
            {children}
        </AuthContext.Provider>
    );
};