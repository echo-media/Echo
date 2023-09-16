import { useNavigate } from "react-router-dom";

const useDeletePost = () => {

    const navigate = useNavigate()

    const deletepost = async (postid) => {

        const response = await fetch("http://localhost:4000/api/posts/deletepost", {
            method: "DELETE",
            body: JSON.stringify({postid}),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (response.ok) {
            navigate("/")
        }

    }

    return deletepost
}

export default useDeletePost