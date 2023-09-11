import { React } from "react"
import { useState, useEffect } from 'react';
import { useAuthContext } from "../hooks/useAuthContext"

const Post = ({ post }) => {
    const { user } = useAuthContext()

    // determine whether the user has liked the post or not and change its style accordingly
    var _isliked
    try {
        _isliked = user.likedPosts.includes(post._id)
    }   catch (e) {
        _isliked = false
    }
    const [isLiked, setIsLiked] = useState(_isliked)

    const createdAt = new Date(post.createdAt)
    const dateFormat = { year: 'numeric', month: 'long', day: 'numeric' }

    return (
        <button className="post-details mb-5 bg-primary hover:bg-accent p-4 rounded-md text-customtxt block w-full text-left"> 
            <div className="mb-2">
                <h1 className="inline text-2xl"><strong>{post.title}</strong></h1>
                <button className="inline float-right"><em><strong>{post.user}</strong></em></button>
            </div>
            <p>{post.content}</p>
            
            
            <div className="select-none mt-3">
                <button onClick={() => setIsLiked(!isLiked)} className={isLiked ? "likebtn likedbtn": "likebtn unlikedbtn"}>
                    <p className="ml-8">{post.likes + isLiked}</p>
                </button>
                <p className="float-right">{createdAt.toLocaleDateString(undefined, dateFormat)}</p>
            </div>
            

        </button>

    )
}

export default Post;