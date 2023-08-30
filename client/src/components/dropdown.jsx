import React, { useState} from "react"
import { Link, useNavigate }  from "react-router-dom"
import { useLogout } from "../hooks/useLogout.jsx"
import { useAuthContext } from "../hooks/useAuthContext.jsx";

const DropDown = () => {
    const { logout } = useLogout()
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const { user } = useAuthContext()
    

    const ToggleDrop = () => {
        setIsOpen(!isOpen)
    }

    const handleLogOut = () => {
        logout()
        navigate("/")
    }

    return (

        <div>
            <button onClick = {ToggleDrop} className="bg-custombgbtn1 navbarbtn" > 
                {user.user.username}
            </button>

            {isOpen && <div className = "absolute z-50 mt-2 py-2 w-32 bg-custombgbtn2 border border-gray-300 rounded shadow-lg">
                <Link to = "/profile" className="block px-4 py-2 text-customtxt hover:bg-custombgbtn1">
                    Profile
                </Link>

                <Link to = "/profile" className="block px-4 py-2 text-customtxt hover:bg-custombgbtn1">
                    Settings
                </Link>

                <Link onClick = {handleLogOut} className="block px-4 py-2 text-customtxt hover:bg-custombgbtn1">
                    Logout
                </Link>
            </div>
            }
        </div>
    );
};

export default DropDown;
 