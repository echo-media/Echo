import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../index.css';

const NavBar = () => { 
    return (
      <header> 
        <div>
          <img src={logo} alt="LOGO" className="float-left w-20 my-1"></img>
          <h1 className = "float-left select-none text-5xl font-bold my-2"> 
            <Link to = "/"> 
              ECHO 
            </Link>
          </h1> 
          <div className = "float-right"> 
            <Link to = "/signup"> 
              <button className = " font-bold rounded-full bg-purple-400 hover:bg-purple-500 text-white w-32 h-12 my-2 mx-2"> 
                Sign Up
              </button>
            </Link>
            <Link to = "/signin"> 
              <button className = " font-bold rounded-full bg-indigo-800 hover:bg-indigo-900 text-white w-32 h-12 my-2 mx-2"> 
                Sign In
              </button> 
            </Link>
          </div>
        </div>
      </header>

    ); 
};

export default NavBar;