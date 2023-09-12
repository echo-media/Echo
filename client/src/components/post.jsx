import { React } from "react"
import { useState } from 'react';
import { useAuthContext } from "../hooks/useAuthContext"
import { useLike } from "../hooks/useLike"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const { user } = useAuthContext()
    const navigate = useNavigate()
    const { changeLiked, error } = useLike()

    // determine whether the user has liked the post or not and change its style accordinglyf
    const [isLiked, setIsLiked] = useState(user ? post.likes.includes(user.user.username) : false)

    const createdAt = new Date(post.createdAt)
    dayjs.extend(relativeTime)

    const toPostPage = () => {
        navigate(`/post/${post._id}`)
    }

    const handleLike = async (e) => {
        
        changeLiked(post._id, user.user._id)
        
    }
    
    return (
        <button className="post-details mb-5 bg-primary hover:bg-accent p-4 rounded-md text-customtxt block w-full text-left"> 
            <div className="mb-2">
                <button onClick = {toPostPage} className="inline text-2xl"><strong>{post.title}</strong></button>
                <button className="inline float-right"><em><strong>{post.user}</strong></em></button>
            </div>
            <p>{post.content}</p>
            
            
            <div className="select-none mt-3">
                <button onClick={handleLike} className={isLiked ? "likebtn likedbtn": "likebtn unlikedbtn"}>
                    <p className="ml-8">{post.likes.length}</p>
                </button>
                <p className="float-right">{dayjs().to(createdAt)}</p>
            </div>
            

        </button>

    )
}

export default Post;