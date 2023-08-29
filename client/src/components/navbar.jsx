import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../index.css';
import { useLogout } from "../hooks/useLogout"

const NavBar = () => { 
  const { logout } = useLogout()
  const handleClick = () => {
    logout()
  }

  return (
    <header> 
      <div className="w-full pt-1">
          <Link className="hover:drop-shadow-[0_5px_20px_rgba(255,255,255,0.15)]" to = "/"> 
            <img src={logo} alt="LOGO" className="float-left w-12 md:w-14 lg:w-20 pt-1"></img>
            <h1 className = "float-left select-none font-bold text-3xl md:text-4xl md:pt-0.5 lg:text-5xl lg:pt-2"> 
              ECHO 
            </h1> 
          </Link>
        
        <div className = "float-right">
          <button onClick={handleClick} className = "bg-red-600 hover:drop-shadow-[0_5px_20px_rgba(248,113,113,0.25)] text-white navbarbtn">Logout</button>
        </div>
        <div className = "float-right"> 
          <Link to = "/signin"> 
            <button className = "bg-[#723ec1] hover:drop-shadow-[0_5px_20px_rgba(126,78,198,0.25)] text-white navbarbtn"> 
              Sign In
            </button>
          </Link>
          <Link to = "/signup"> 
            <button className = "bg-[#201037] hover:drop-shadow-[0_5px_20px_rgba(126,78,198,0.25)] text-white navbarbtn"> 
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </header>

  ); 
};

export default NavBar;