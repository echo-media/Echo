import React, { useState, useEffect } from 'react';
import logo from '../logo.svg'
import { Link, useNavigate } from "react-router-dom"
import '../index.css';




const SignIn = () => {

  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { email, password };

    try {
        const response = await fetch("http://localhost:4000/api/users/login", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            const json = await response.json();
            setEmail("");
            setPassword("");
            setError(null);
            console.log("New user created!", json);
            navigate("/mainfeed");
        } else {
            const json = await response.json();
            setError(json.error);
        }
    } catch (error) {
        setError("An error occurred while processing your request.");
    }
};

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
        <div className = "relative top-[200px]">
          <div className = 'flex justify-center items-center'>
            <h1 className="text-xl font-bold mb-4">Sign In to Echo</h1>  
          </div>
          <form onSubmit = {handleSubmit}> 
            <div className = 'mb-4'>
              <label className = 'flex justify-center text-white text-sm font-semibold mb-1' for = 'email'>
                  Email
              </label>
              <input onChange={(e) => setEmail(e.target.value)} id = 'email' className = 'w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500 bg-indigo-950' type ='email'placeholder='Enter your email'>
              </input>
            
              <label className = 'flex justify-center text-white text-sm font-semibold mb-1' for = 'password'>
                  Password
              </label>
              <input onChange={(e) => setPassword(e.target.value)} id = 'password' className = 'w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500 bg-indigo-950' type ='password'placeholder='Enter your password'>
              </input>

              <div class = 'flex justify-center items-center'>
                
                  <button id = 'BtnConfirm' className = ' font-bold rounded-full bg-indigo-800 hover:bg-indigo-900 text-white w-32 h-12 my-2'> 
                    Sign In
                  </button>  
                
              </div>
            </div>
          </form> 
        </div>
      </div>
    </div>
  );
};

export default SignIn;