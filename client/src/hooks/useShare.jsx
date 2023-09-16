import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useShare = () => {
    const navigate = useNavigate()
  

    const share = async (postid, userid) => {
    
        const response = await fetch("http://localhost:4000/api/posts/sharepost", {
            method: "POST",
            body: JSON.stringify({postid, userid}),
            headers: {
                "Content-Type": "application/json", 
            },
        });

    }
    
    return share
}