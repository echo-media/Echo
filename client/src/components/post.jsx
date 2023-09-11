import { React } from "react"
import { useState } from 'react';
import { useAuthContext } from "../hooks/useAuthContext"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

const Post = ({ post }) => {
    const { user } = useAuthContext()

    // determine whether the user has liked the post or not and change its style accordingly
    const [isLiked, setIsLiked] = useState(user.user.likedPosts.includes(post._id))

    const createdAt = new Date(post.createdAt)
    dayjs.extend(relativeTime)
    
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
                <p className="float-right">{dayjs().to(createdAt)}</p>
            </div>
            

        </button>

    )
}

export default Post;