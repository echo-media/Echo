import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../index.css';
import { useAuthContext } from '../hooks/useAuthContext';
import DropDown from "./dropdown.jsx"

const NavBar = () => { 
  const { user } = useAuthContext()
    
  return (
      <div className="w-full select-none">
          {!user && <Link to = "/"> 
            <img src={logo} alt="LOGO" className="float-left w-12 md:w-14 lg:w-20 pt-1"></img>
            <h1 className = "float-left select-none font-bold text-3xl md:text-4xl md:pt-0.5 lg:text-5xl lg:pt-2"> 
              ECHO 
            </h1> 
          </Link>}

          {user && <Link to = "/mainfeed">
            <img src={logo} alt="LOGO" className="float-left w-12 md:w-14 lg:w-20 pt-1"></img> 
            <h1 className = "float-left font-bold text-3xl md:text-4xl md:pt-0.5 lg:text-5xl lg:pt-2"> 
              ECHO 
            </h1> 
          </Link>}

        {user && <div className = "float-right">

              <Link to = "/newpost"> 
                <button className = "bg-secondary hover:bg-purple-500 text-white navbarbtn"> 
                  New Post
                </button>
              </Link>
            
            <div className='flex float-right'> 
              <DropDown />
            </div>

        </div>}
        {!user && <div className = "float-right"> 
          <Link to = "/signin"> 
            <button className = "bg-primary hover:bg-purple-500 text-white navbarbtn"> 
              Sign In
            </button>
          </Link>
          <Link to = "/signup"> 
            <button className = "bg-secondary hover:bg-indigo-800 text-white navbarbtn"> 
              Sign Up
            </button>
          </Link>
        </div>}
      </div>

  ); 
};

export default NavBar;