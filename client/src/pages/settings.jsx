import { React } from "react"
import ProtectPage from "../components/pageprotection";

const Settings = () => {
    ProtectPage("/signin", "/settings")
    
    return (
        <div class = "h-screen">

        </div>
    );
    
};

export default Settings;