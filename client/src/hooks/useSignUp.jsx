import { useAuthContext } from "./useAuthContext"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
    const navigate = useNavigate()
    
    const signup = async (username, email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch("https://echo-three-nu.vercel.app/api/users/signup", {
            method: "POST",
            body: JSON.stringify( { username, email, password }),
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
    return { signup, isLoading, error }

}
