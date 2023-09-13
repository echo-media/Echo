import { useAuthContext } from "./useAuthContext";
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const useCreatePost = () => {

    const navigate = useNavigate()

    const newpost = async (user, title, content, isEcho) => {

        const response = await fetch("https://echosocial.onrender.com/api/posts/newpost", {
            method: "POST",
            body: JSON.stringify({ user, title, content, isEcho}),
            headers: {
                "Content-Type": "application/json"
            },
        });

        const json = await response.json()
        if (response.ok) {
            navigate("/mainfeed")
        } 
    }

    return newpost

}