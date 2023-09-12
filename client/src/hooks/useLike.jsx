import { useAuthContext } from "./useAuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export const useLike = () => {
    const [error, setError] = useState(null)

    const changeLiked = async (postid, userid) => {
        setError(false)
        
        const response = await fetch("/api/posts/likepost", {
            method: "POST",
            body: JSON.stringify({postid, userid}),
            headers: {
                "Content-Type": "application/json", 
            },
        });

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
    }
    
    return { changeLiked, error}
}