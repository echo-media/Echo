import React, { useState, useEffect } from "react"
import Post from "../components/post"
import { useParams } from "react-router-dom"

const SinglePost = () => {
  const [post, setPost] = useState(null)
  const { postid } = useParams()

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

    fetchPost()
    
  }, [postid])

  return (
    <div>
      {post && <Post post={post} />}
    </div>
  );
};

export default SinglePost;