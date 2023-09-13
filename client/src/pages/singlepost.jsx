import React, { useState, useEffect } from "react"
import Post from "../components/post"
import Comment from "../components/comment";
import { useParams } from "react-router-dom"
import { useCreateComment } from "../hooks/useCreateComment";
import { useAuthContext } from "../hooks/useAuthContext";

const SinglePost = () => {
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])
  const [newcontent, setNewContent] = useState("")
  const { postid } = useParams()
  const newcomment  = useCreateComment()
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/posts/getone/${postid}`)

        if (response.ok) {
          const json = await response.json()
          setPost(json);
          
          
        }
      } catch (error) {
        console.error(error)
      }
    }

    const fetchComment = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/comments/getpostscomments/${postid}`)

        if (response.ok) {
          const json = await response.json()
          setComments(json.comments)
          console.log(comments)
        }
      } catch (error) {
        console.log(error)
        console.log("flop")
      }
    }


    fetchPost()
    fetchComment()
    
  }, [postid])

  const handleSubmit = async (e) => {
    await newcomment(user.user.username, postid, newcontent)

  };

  return (
    <div className='h-full'>
      <div className = "relative top-[50px]"> 
        {post && <Post post={post} />}
      </div>

      <div className = "relative top-[70px]">
        <form onSubmit= {handleSubmit} >
          <input onChange = {(e) => setNewContent(e.target.value)} placeholder="Enter your Comment Here" className = "w-[89%] mx-4">
          </input>

          <button className="font-bold rounded-full w-32 h-12 mx-1 mt-1 bg-indigo-300">
            Send Comment
          </button>

        </form>

        <div className = "flex items-center justify-center px-5 w-full">
          <div className = "posts w-[80%] mt-32"> 
            {comments && comments.slice().reverse().map((comments) => (
                <Comment  comment={comments} />
              ))}
          </div>
        </div>

      </div>
    </div>

  );
};

export default SinglePost;