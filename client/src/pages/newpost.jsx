import { React } from "react"
import "../index.css"
import ProtectPage from "../components/pageprotection";

const NewPost = () => {

    ProtectPage("/signin", "/newpost")

    return (

        <div className="h-screen">
            
        </div>

    );

};

export default NewPost