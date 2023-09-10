import React, {useEffect, useContext, useState} from 'react';
import '../index.css';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../context/authContext';
import ProtectPage from "../components/pageprotection";

const MainFeed = () => { 
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:4000/api/posts")
      const json = await response.json()

      if (response.ok) {
        setPosts(json)
      }
    }

    fetchPosts()
  }, [])

  ProtectPage("/signin", "/mainfeed")
  
  return (
    <div className = 'h-screen'>
      <div className="post">
        {posts && posts.map((post) => (
          <p key={post._id}>{post.title}</p>
        ))}
      </div>
    </div>
  ); 
};

export default MainFeed;