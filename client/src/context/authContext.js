import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user") || null)
    );

    const navigate = useNavigate();

    const login = async(id, name) => {

        try {
            const response = await axios.post("http://localhost:8000/login", {
                id,
                name
            })
          
            if (response.status === 200) {
                setCurrentUser({
                    id: id,
                    name: name
                });

                navigate("/");
                
            } else if (response.data === "not exist") {
                alert("User has not registed");
            } else if (response.data === "the password is incorrect") {
                alert("the password is incorrect");
            } 
        } catch (e) {
            console.log(e);
        } 
    }
    
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    )
}