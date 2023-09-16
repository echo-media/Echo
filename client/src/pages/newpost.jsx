import React, { useState } from "react";
import "../index.css";
import ProtectPage from "../components/pageprotection";
import { useCreatePost } from "../hooks/useCreatePost";
import { useAuthContext } from "../hooks/useAuthContext";

const NewPost = () => {
  const { user } = useAuthContext();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { newpost } = useCreatePost();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await newpost(user.user.username, title, content, false);
  };

  return (
    <div className="h-screen">
      <ProtectPage notLoggedIn="/signin" loggedIn="/newpost" />
      <div className="flex items-center justify-center w-full relative top-[200px]">
        <div className="text-center">
          <h1 className="mb-4">Create a new post!</h1>
          <form onSubmit={handleSubmit} className="w-80">
            <input
              onChange={(e) => setTitle(e.target.value)}
              className="w-full h-8 mb-4"
              id="post-title"
              placeholder="Enter the title for your post"
            />

            <textarea
              onChange={(e) => setContent(e.target.value)}
              className="input-with-scroll w-full h-32"
              id="post-content"
              placeholder="Enter the content of your post"
            ></textarea>

            <div className="flex justify-center mt-4">
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