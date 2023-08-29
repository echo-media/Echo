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
          {!user && <Link to = "/" className="hover:drop-shadow-[0_5px_20px_rgba(255,255,255,0.15)]"> 
            <img src={logo} alt="LOGO" className="float-left w-12 md:w-14 lg:w-20 pt-1"></img>
            <h1 className = "float-left select-none font-bold text-3xl md:text-4xl md:pt-0.5 lg:text-5xl lg:pt-2"> 
              ECHO 
            </h1> 
          </Link>}

          {user && <Link to = "/mainfeed" className="hover:drop-shadow-[0_5px_20px_rgba(255,255,255,0.15)]">
            <img src={logo} alt="LOGO" className="float-left w-12 md:w-14 lg:w-20 pt-1"></img> 
            <h1 className = "float-left select-none font-bold text-3xl md:text-4xl md:pt-0.5 lg:text-5xl lg:pt-2"> 
              ECHO 
            </h1> 
          </Link>}

        {user && <div className = "float-right">
          
            <button onClick={handleLogout} className = "bg-red-600 hover:drop-shadow-[0_5px_20px_rgba(248,113,113,0.25)] text-white navbarbtn float-left">Logout</button>

        </div>}
        {!user && <div className = "float-right"> 
          <Link to = "/signin"> 
            <button className = "bg-primary hover:drop-shadow-[0_5px_20px_rgba(126,78,198,0.25)] text-white navbarbtn"> 
              Sign In
            </button>
          </Link>
          <Link to = "/signup"> 
            <button className = "bg-secondary hover:drop-shadow-[0_5px_20px_rgba(126,78,198,0.25)] text-white navbarbtn"> 
              Sign Up
            </button>
          </Link>
        </div>}
      </div>
    </header>

  ); 
};

export default NavBar;