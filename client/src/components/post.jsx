import { React } from "react"
import { useState, useEffect } from 'react';
import { useAuthContext } from "../hooks/useAuthContext"

const Post = ({ post }) => {
    const { user } = useAuthContext()

    // determine whether the user has liked the post or not and change its style accordingly
    /*let isLiked = false
    try {
        isLiked = user.likedPosts.includes(post._id)
    } catch (e) {
        //console.log(e)
        console.log("hi")
    }

    const changeLiked = () => {
        isLiked = !isLiked
    }*/
    var _isliked
    try {
        _isliked = user.likedPosts.includes(post._id)
    }   catch (e) {
        _isliked = false
    }
    const [isLiked, setIsLiked] = useState(_isliked)
    
    useEffect( () => {
        console.log(isLiked)
    }, [isLiked])

    return (
        <div className="post-details mb-5 bg-primary hover:bg-accent p-2 rounded-md"> 
            <div>
                <h1 className="inline">{post.title}</h1>
                <h2 className="inline float-right">posted by {post.user}</h2>
            </div>
            <p>{post.content}</p>
            
            
            <div className="select-none flex flex-row mt-2">
                <button onClick={() => setIsLiked(!isLiked)} className={isLiked ? "likebtn likedbtn": "likebtn unlikedbtn"}>
                    <p className="pl-8">{post.likes + isLiked}</p>
                </button>
            </div>

        </div>

    )
}

export default Post;