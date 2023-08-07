import React from 'react';
import logo from '../logo.svg'
import { Link } from "react-router-dom";
import '../index.css';

const SignIn = () => {
  return (
    <div className = 'h-screen'>
      <nav id="navBar">
        <img src={logo} alt="LOGO" className="float-left w-20 my-1"></img>
        <Link to = '/'>
					<h1 id="titleEcho" className="float-left select-none text-5xl font-bold my-2">
						ECHO
					</h1>
				</Link>
        <Link to = '/signup'> 
          <button id="BtnSignUp" className="float-right font-bold rounded-full bg-purple-400 hover:bg-purple-500 text-white w-32 h-12 my-2 mx-2">
            Sign Up
          </button> 
        </Link>
      </nav>
        
      <div className="flex justify-center">
        <div className = "relative top-[100px]">
          <div className = 'flex justify-center items-center'>
            <h1 className="text-xl font-bold mb-4">Sign In to Echo</h1>  
          </div>
          <form> 
            <div className = 'mb-4'>
              <label className = 'flex justify-center text-white text-sm font-semibold mb-1' for = 'email'>
                  Email
              </label>
              <input id = 'email' className = 'w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500 bg-indigo-950' type ='email'placeholder='Enter your email'>
              </input>
            
              <label className = 'flex justify-center text-white text-sm font-semibold mb-1' for = 'password'>
                  Password
              </label>
              <input id = 'password' className = 'w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500 bg-indigo-950' type ='password'placeholder='Enter your password'>
              </input>

              <div class = 'flex justify-center items-center'>
                <Link to = '/mainfeed'>
                  <button id = 'BtnConfirm' className = ' font-bold rounded-full bg-indigo-800 hover:bg-indigo-900 text-white w-32 h-12 my-2'> 
                    Sign In
                  </button>  
                </Link>
              </div>
            </div>
          </form> 
        </div>
      </div>
    </div>
  );
};

export default SignIn;