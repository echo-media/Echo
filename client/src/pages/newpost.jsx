import React, { useState } from "react";
import "../index.css";
import ProtectPage from "../components/pageprotection";
import { useCreatePost } from "../hooks/useCreatePost";
import { useAuthContext } from "../hooks/useAuthContext";


const NewPost = () => {
  ProtectPage("/signin", "/newpost");
  const { user } = useAuthContext();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const newpost = useCreatePost();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await newpost(user.user.username, title, content, false);
  };

  return (
    <div className="h-screen">
      <div className="flex justify-center items-center">
        <div className="relative top-[200px] left-[50px]">
          <div className="flex justify-center items-center mb-4">
            <h1>Create a new post!</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                onChange={(e) => setTitle(e.target.value)}
                className="w-64 h-8 mb-4"
                id="post-title"
                placeholder="Enter the title for your post"
              />
            </div>

            <div>
              <textarea
                onChange={(e) => setContent(e.target.value)}
                className="input-with-scroll w-64 h-32"
                id="post-content"
                placeholder="Enter the content of your post"
              ></textarea>
            </div>

            <div className="flex justify-center items-center mt-4">
              <button className="navbarbtn" id="send-post">
                Send Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPost;