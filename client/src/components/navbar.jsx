import React from 'react';
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

  document.addEventListener('DOMContentLoaded', () => {
    const dropdownbtn = document.getElementById("dropdown-button");
    const dropdownmenu = document.getElementById("dropdown-menu");
  
    dropdownbtn.addEventListener('click', () => {
      dropdownmenu.classList.toggle('hidden');
    });
  });

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <header> 
      <div className="w-full pt-1">
          {!user && <Link to = "/"> 
            <h1 className = "float-left select-none font-bold text-3xl md:text-4xl md:pt-0.5 lg:text-5xl lg:pt-2"> 
              ECHO 
            </h1> 
          </Link>}

          {user && <Link to = "/mainfeed"> 
            <h1 className = "float-left select-none font-bold text-3xl md:text-4xl md:pt-0.5 lg:text-5xl lg:pt-2"> 
              ECHO 
            </h1> 
          </Link>}

        {user && <div className = "float-right">
          <button type = "button" class="inline-flex items-center justify-center px-4 py-2 bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="dropdown-button" aria-haspopup="true" aria-expanded="true">
            Username

            <svg class="w-4 h-4 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg> 
          </button>

          <div class="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 mr-2" id="dropdown-menu" aria-labelledby="dropdown-button">
            
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100">Profile</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100">Settings</a>
            <button onClick={handleLogout} className = "bg-red-500 hover:bg-red-600 text-white navbarbtn float-left">Logout</button>
            
          </div>
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