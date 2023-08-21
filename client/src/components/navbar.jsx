import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../index.css';

const NavBar = () => { 
    return (
      <header> 
        <div className="w-full pt-1">
            <Link to = "/"> 
              <img src={logo} alt="LOGO" className="float-left w-12 md:w-14 lg:w-20 pt-1"></img>
              <h1 className = "float-left select-none font-bold text-3xl md:text-4xl md:pt-0.5 lg:text-5xl lg:pt-2"> 
                ECHO 
              </h1> 
            </Link>
          
          <div className = "float-right"> 
            <Link to = "/signup"> 
              <button className = "bg-purple-400 hover:bg-purple-500 text-white navbarbtn"> 
                Sign Up
              </button>
            </Link>
            <Link to = "/signin"> 
              <button className = "bg-indigo-800 hover:bg-indigo-900 text-white navbarbtn"> 
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </header>

    ); 
};

export default NavBar;