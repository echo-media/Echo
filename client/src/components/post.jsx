import { React } from "react"
import { useState } from 'react';
import { useAuthContext } from "../hooks/useAuthContext"
import { useLike } from "../hooks/useLike"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { useNavigate } from "react-router-dom";
import { useCreatePost } from "../hooks/useCreatePost";
import useDeletePost from "../hooks/useDeletePost.jsx"
import { useShare } from "../hooks/useShare";

const Post = ({ post }) => {
    const { user } = useAuthContext()
    const navigate = useNavigate()
    const { changeLiked, error } = useLike()
    const {newpost, echopost} = useCreatePost()
    const deletepost = useDeletePost()
    const share = useShare()

    
    // determine whether the user has liked the post or not and change its style accordinglyf
    const [isLiked, setIsLiked] = useState(user ? post.likes.includes(user.user.username) : false)

    const createdAt = new Date(post.createdAt)
    dayjs.extend(relativeTime)

    const toPostPage = () => {
        navigate(`/post/${post._id}`)
    }

    const handleLike = async (e) => {
        if (!user) {
            return
        }
        changeLiked(post._id, user.user._id)
        setIsLiked(!isLiked)
        // gives the illusion of the user liking and unliking the post without making unecessary requests to the db
        if (!isLiked) {
            post.likes.push(user.user.username)
        } else {
            post.likes.pop()
        }
    }

    const handleEcho = async () => {

        await echopost(user.user.username, post.title, post.content, true, post._id)
    }

    const handleDelete = async () => {

        console.log(post.id)
        await deletepost(post._id)

    }

    const handleShare = async () => {

        await share(post._id, user.user._id)

        const dashboardLink = `http://localhost:3000/post/${post._id}`; 
        
        navigator.clipboard.writeText(dashboardLink)
            .then(() => {
            alert("You have copied the link to this post");
            })
            .catch((error) => {
            console.error('Error copying to clipboard: ', error);

            });
        

    }

    return (
        <button className="post-details mb-5 bg-primary hover:bg-accent p-4 rounded-md text-customtxt block w-full text-left"> 
            <div className="mb-2">
                <button onClick = {toPostPage} className="inline text-2xl"><strong>{post.title}</strong></button>
                {!post.isEcho && <button className="inline float-right"><em><strong>{post.user}</strong></em></button>}
                {post.isEcho &&
                <button className="inline float-right"><em><strong>{post.user} echoed this post</strong></em></button>
                }
            </div>
            <p onClick = {toPostPage}>{post.content}</p>
            
            
            <div className="select-none mt-3">
                <button onClick={handleLike} className={isLiked ? "likebtn likedbtn mr-6": "likebtn unlikedbtn mr-6"}>
                    <p className="ml-8 text-black">{post.likes.length}</p>
                </button>
                <button onClick = {handleShare} className = "ml-6 mr-6 sharebtn"> 
                    <p className="ml-8 text-black">{post.shares.length}</p> 
                </button>
                <button onClick = {toPostPage} className = "ml-6 mr-6 commentbtn"> 
                    <p className="ml-8 text-black">{post.comments.length}</p> 
                </button>
                {!post.isEcho && <button onClick = {handleEcho} className = "ml-6 mr-6 echobtn"> 
                    <p className="text-transparent">Echo</p> 
                </button>}
                {post.user === user.user.username && (
                <button onClick = {handleDelete} className="ml-4 deletebtn">
                    <p className="text-transparent">Delete</p>
                </button>
)}
                <p className="float-right">{dayjs().to(createdAt)}</p>
            </div>
            

        </button>

    )
}

export default Post;

