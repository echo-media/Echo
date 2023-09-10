import { React } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
import heart from '../assets/heart.png'
import redHeart from "../assets/red-heart.png"
const Post = ({ post }) => {
    const { user } = useAuthContext()
    return (
        <div className="post-details mb-5 bg-primary hover:bg-secondary p-2 rounded-md"> 
            <div>
                <h1 className="inline">{post.title}</h1>
                <h2 className="inline float-right">{post.user}</h2>
            </div>
            <p>{post.content}</p>
            <br></br>
            <img src={heart} alt="Likes:" className="float-left h-5 mr-2"></img>
            <p>{post.likes}</p>
        </div>

    )
}

export default Post;