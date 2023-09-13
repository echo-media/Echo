import { React } from "react"
import { useState } from 'react';
import { useAuthContext } from "../hooks/useAuthContext"
import { useLike } from "../hooks/useLike"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { useNavigate } from "react-router-dom";

const Comment = ({ comment }) => {
    const { user } = useAuthContext()
    const navigate = useNavigate()
    
    const createdAt = new Date(comment.createdAt)
    dayjs.extend(relativeTime)

    
    
    return (
        <button className="post-details mb-5 bg-primary hover:bg-accent p-4 rounded-md text-customtxt block w-full text-left"> 
            <div className="mb-2">
                <button className="inline float-right"><em><strong>{comment.user}</strong></em></button>
            </div>
            <p>{comment.content}</p>
            
            
            <div className="select-none mt-3">
                <p className="float-right">{dayjs().to(createdAt)}</p>
            </div>
            

        </button>

    )
}

export default Comment;