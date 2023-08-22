import { useAuthContext } from "./useAuthContext"
import { useState } from "react"

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (username, email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch("http://localhost:4000/api/users/signup", {
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
        }

    }
    return { signup, isLoading, error }

}