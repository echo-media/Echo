import React, { useEffect, useState } from 'react';
import '../index.css';
import { useNavigate } from "react-router-dom";
import ProtectPage from "../components/pageprotection";
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
      <ProtectPage notLoggedIn="/signin" loggedIn="/mainfeed" />
      <div className='flex relative top-[100px] w-[90%]'>
        <div className="posts w-[70%] mr-20">
          {posts &&
            posts.slice().reverse().map((post) => (
              <Post key={post._id} post={post} />
            ))}
        </div>
        <div className="new-div ml-4 w-[25%] flex flex-col items-center">
          <div className="bg-secondary rounded-md p-4 ">
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