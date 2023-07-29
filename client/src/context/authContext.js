import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user") || null)
    );

    const navigate = useNavigate();

    const login = async(id, pass) => {

        try {
            const response = await axios.post("http://localhost:8000/login", {
                studentID: id,
                password: pass
            })
          
            if (response.data === "not exist") {
                alert("User has not registed")
            } else if (response.data === "the password is incorrect") {
                alert("Password is incorrect");
            } else {
                setCurrentUser({
                    id: response.data.id,
                    name: response.data.name
                });

                navigate("/");
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