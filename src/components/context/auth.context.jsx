import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext({
    user: {
        "_id": "",
        "username": "",
        "email": ""
    },
});

export const AuthWrapper = (props) => {
    const [user, setUser] = useState({
        "_id": "",
        "username": "",
        "email": ""
    });
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}