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
      const response = await fetch("http://localhost:4000/api/posts/getall")
      const json = await response.json()

      if (response.ok) {
        setPosts(json)
      }
    }

    fetchPosts()
  }, [])

  ProtectPage("/signin", "/mainfeed")
  
  return (
    <div className='h-full'>
      
      <div className = 'bg-red-500 flex-wrap flex flex-col items-center justify-center w-full px-5 lg:flex-nowrap'>
        <div className="post">
          {posts && posts.map((post) => (
            <h1 key={post._id}>{post.title}</h1>
          ))}
        </div>
      </div>
    </div>
  ); 
};

export default MainFeed;