import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../index.css';
import { useLogout } from "../hooks/useLogout"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from '../hooks/useAuthContext';
import DropDown from "./dropdown.jsx"

const NavBar = () => { 
  const { user } = useAuthContext()
    
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

            
              <Link to = "/newpost"> 
                <button className = "bg-secondary hover:bg-purple-500 text-white navbarbtn"> 
                  Create Post
                </button>
              </Link>
              <Link to = "/news"> 
                <button className = "bg-secondary hover:bg-purple-500 text-white navbarbtn"> 
                  Latest News
                </button>
              </Link>
            
            <div className='flex float-right mr-4'> 
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
    </header>

  ); 
};

export default NavBar;