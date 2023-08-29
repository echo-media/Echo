import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../index.css';
import { useLogout } from "../hooks/useLogout"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from '../hooks/useAuthContext';

const NavBar = () => { 
  const navigate = useNavigate()
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <header> 
      <div className="w-full pt-1">
          {!user && <Link to = "/"> 
            <img src={logo} alt="LOGO" className="float-left w-12 md:w-14 lg:w-20 pt-1"></img>
            <h1 className = "float-left select-none font-bold text-3xl md:text-4xl md:pt-0.5 lg:text-5xl lg:pt-2"> 
              ECHO 
            </h1> 
          </Link>}

          {user && <Link to = "/mainfeed">
            <img src={logo} alt="LOGO" className="float-left w-12 md:w-14 lg:w-20 pt-1"></img> 
            <h1 className = "float-left select-none font-bold text-3xl md:text-4xl md:pt-0.5 lg:text-5xl lg:pt-2"> 
              ECHO 
            </h1> 
          </Link>}

        {user && <div className = "float-right">
          
            <button onClick={handleLogout} className = "bg-red-500 hover:bg-red-600 text-white navbarbtn float-left">Logout</button>

        </div>}
        {!user && <div className = "float-right"> 
          <Link to = "/signin"> 
            <button className = "bg-custombgbtn1 hover:bg-purple-500 text-white navbarbtn"> 
              Sign In
            </button>
          </Link>
          <Link to = "/signup"> 
            <button className = "bg-custombgbtn2 hover:bg-indigo-800 text-white navbarbtn"> 
              Sign Up
            </button>
          </Link>
        </div>}
      </div>
    </header>

  ); 
};

export default NavBar;