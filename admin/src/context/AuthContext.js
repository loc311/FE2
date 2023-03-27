import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async (inputs) => {
        const res = await axios.post("http://localhost:8888/api/v1/authenticate", inputs, {
            withCredentials: true,
        });

        setCurrentUser(res.data)
    };

    //logout
    // const logout = async (inputs) => {
    //     const res = await axios.post("/auth/logout");
    //     setCurrentUser(null);
    // };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    );
};