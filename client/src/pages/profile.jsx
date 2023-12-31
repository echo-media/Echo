import React, { useState, useEffect } from "react";

import { useAuthContext } from "../hooks/useAuthContext";
import Post from "../components/post";

const Profile = () => {

  const { user } = useAuthContext();
  const followerCount = user?.user?.followCount || 0; // Use optional chaining and provide a default value
  const username = user?.user?.username || "";
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/posts/userposts/${username}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });

        if (response.ok) {
          const json = await response.json();

          setPosts(json.posts);
          
        } else {
          console.error("Failed to fetch posts");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

   
    fetchPosts();
    
  }, [username]);

  return (
    <div className="h-screen">
      
      <div className="flex items-center justify-center px-5 w-full pb-8">
        <h1>Follower Count: {followerCount}</h1>
      </div>

      <div className="flex items-center justify-center px-[4%] w-full">
        <div className="posts">
          {posts.slice().reverse().map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;