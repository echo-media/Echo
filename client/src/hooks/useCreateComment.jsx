import { useParams } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

export const useCreateComment = () => {

    const newpost = async (username, postid, content ) => {

        const response = await fetch("https://echosocial.onrender.com/api/comments/newcomment", {
            method: "POST",
            body: JSON.stringify({ username, postid, content }),
            headers: {
                "Content-Type": "application/json"
            },
        });
    }

    return newpost

}