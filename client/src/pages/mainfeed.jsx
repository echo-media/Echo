import React, { useEffect, useState } from 'react';
import '../index.css';
import { useNavigate } from "react-router-dom";

import Post from "../components/post";
import User from '../components/user';
import { useAuthContext } from '../hooks/useAuthContext';

const MainFeed = () => {
  const [posts, setPosts] = useState(null);
  const [users, setUsers] = useState(null);
  const [topPosts, setTopPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:4000/api/posts/getall");
      const json = await response.json();

      if (response.ok) {
        // Sort posts based on likes (descending order)
        const sortedPosts = json.slice().sort((a, b) => b.likes.length - a.likes.length);
        setPosts(json);
        setTopPosts(sortedPosts.slice(0, 5)); // Get the top 5 posts
      } else {
        console.log(json);
      }
    };

    const fetchUsers = async () => {
      const response = await fetch("http://localhost:4000/api/users/");
      const json = await response.json();

      if (response.ok) {
        setUsers(json);
        console.log(json);
      } else {
        console.log("flop");
      }
    };

    fetchUsers();
    fetchPosts();
  }, []);

  return (
    <div className='h-full'>
      
      <div className='flex pt-[5%] md:pt-[2%] w-full px-[4%]'>
        <div className="posts w-full">
          {posts &&
            posts.slice().reverse().map((post) => (
              <Post key={post._id} post={post} />
            ))}
        </div>
        <div className="hidden new-div ml-[3%] w-[35%] sm:flex flex-col items-center">
          <div className="hidden lg:inline bg-secondary rounded-md p-4 ">
            <h1 className='inline text-2xl'> <strong> Trending Posts  </strong></h1>
            <div className = "mt-4">
              {topPosts &&
                topPosts.map((post) => (
                  <Post key={post._id} post={post} />
                ))}
            </div>
          </div>

          <div className='bg-secondary rounded-md p-4 mt-8 mb-8 w-full'>
            <h1 className='inline text-2xl'> <strong> Users you might like  </strong></h1>
            <div className="w-full">
              {users &&
                users.map((user) => (
                  <User user={user} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFeed;