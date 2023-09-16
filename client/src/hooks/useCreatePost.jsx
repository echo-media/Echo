import { useAuthContext } from "./useAuthContext";
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const useCreatePost = () => {

    const navigate = useNavigate()

    const newpost = async (user, title, content, isEcho) => {

        const response = await fetch("http://localhost:4000/api/posts/newpost", {
            method: "POST",
            body: JSON.stringify({ user, title, content, isEcho}),
            headers: {
                "Content-Type": "application/json"
            },
        });

        if (response.ok) {
            navigate("/mainfeed")
        } 
    }

    const echopost = async (user, title, content, isEcho, echoedPost) => {

        const response = await fetch("http://localhost:4000/api/posts/echopost", {
            method: "POST",
            body: JSON.stringify({user, title, content, isEcho, echoedPost }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (response.ok) {
            navigate("/")
        } 
    }

    return {newpost, echopost}

}