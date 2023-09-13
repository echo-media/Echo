import { useAuthContext } from "./useAuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export const useSignIn = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const navigate = useNavigate()
    const { dispatch } = useAuthContext()

    const signin = async (email, password) => {
        setIsLoading(true)
        setError(false)

        

        const response = await fetch("https://echosocial.onrender.com/api/users/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json", 
            },
        });

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)

        }

        if (response.ok) {
            localStorage.setItem("user", JSON.stringify(json))

            dispatch( {type: "LOGIN", payload: json} )

            setIsLoading(false)
            navigate("/mainfeed")
        }

    }
    
    return { signin, isLoading, error}

}