import { React } from "react"
import ProtectPage from "../components/pageprotection";

const Settings = () => {
    
    return (
        <div class = "h-screen">
            <ProtectPage notLoggedIn="/signin" loggedIn="/settings" />
        </div>
    );
    
};

export default Settings;