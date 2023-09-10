import { React } from "react"
import ProtectPage from "../components/pageprotection";

const Profile = () => {
    ProtectPage("/signin", "/profile")

    return (
      <div className = 'h-screen '>
        <div className = "bg-black flex justify-center items-center relative top-[200px]"> 
          USER STATISTICS GO HERE EG... FOLLOWERS, FOLLOWING, POSTCOUNT
        </div>

        <div className = "flex justify-center item-center h-full relative top-[300px] overflow-y-scroll bg-black">
          USER SPECIFIC POSTS GO HERE 
        </div>
    
    </div>
        
    );
    
};

export default Profile;

