import { React, useState } from "react"
import "../index.css"
import ProtectPage from "../components/pageprotection";
import { useCreatePost } from "../hooks/useCreatePost";
import { useAuthContext } from "../hooks/useAuthContext";


const NewPost = () => {

    ProtectPage("/signin", "/newpost")
    const { user } = useAuthContext()

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const { newpost } = useCreatePost()

    const handleSubmit = async (e) => {
      e.preventDefault()

      await newpost(user.user.username, title, content)
    }

    return (

        <div className="h-screen">
            <div className = "flex justify-center items-center"> 
              <div className = "relative top-[200px] left-[50px]">
                <div className = "flex justify-center items-center mb-4"> 
                  <h1> Create a new post!</h1>
                </div>
                <form>
                  <div> 
                    <input className = "w-64 h-8 mb-4" id = "post-title" placeholder = "Enter the title for your post"> 
                    </input>
                  </div>

                  <div>
                    <input className = "w-64 h-32" id = "post-content" placeholder = "Enter the content of your new post">
                    </input>
                  </div>

                  <div className = "flex justify-center items-center mt-4">
                    <button className = "bg-white w-32 h-12 rounded-full" id = "send-post">
                      Send Post
                    </button>
                  </div>
                  
                </form>
              </div>
            </div>
            
        </div>

    );

};

export default NewPost