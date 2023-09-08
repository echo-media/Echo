import { useAuthContext } from "./useAuthContext";
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const useCreatePost = () => {

    const newpost = async (user, title, content) => {

        const response = await fetch("http://localhost:4000/api/posts/", {
            method: "POST",
            body: JSON.stringify({ user, title, content}),
            headers: {
                "Content-Type": "application/json"
            },
        });

        
    }

    return newpost

}