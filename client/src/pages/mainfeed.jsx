import React, {useEffect, useState} from 'react';
import '../index.css';
//import { useAuthContext } from '../hooks/useAuthContext';
//import { useNavigate } from "react-router-dom"
//import { AuthContext } from '../context/authContext';
import ProtectPage from "../components/pageprotection";
import Post from "../components/post"
const MainFeed = () => { 
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:4000/api/posts/getall")
      const json = await response.json()

      if (response.ok) {
        console.log(json)
        setPosts(json)
      } else {
        console.log(json)
      }
    }

    fetchPosts()
  }, [])

  ProtectPage("/signin", "/mainfeed")
  
  return (
    <div className='h-full'>
      
      <div className = 'flex items-center justify-center px-5 w-full'>
        <div className="posts w-[50%]">
          {posts && posts.slice().reverse().map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  ); 
};

export default MainFeed;