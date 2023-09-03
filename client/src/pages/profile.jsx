import { React } from "react"
import ProtectPage from "../components/pageprotection";

const Profile = () => {
    ProtectPage("/signin", "/profile")

    return (
        <div class = "h-screen">

        </div>
    );
    
};

export default Profile;

