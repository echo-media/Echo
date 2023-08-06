import react from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../index.css';
import { useNavigate } from "react-router";
import { useEffect, useState } from "react"

const SignUp = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
	e.preventDefault()

	const User = { username, email, password }

	const response = await fetch ("http://localhost:4000/api/users", {
		method: "POST",
		body: JSON.stringify(User),
		headers: {
			"Content-Type": "application/json",
		},
	});

	const json = await response.json()

	if (!response.ok) {
		setError(json.error)
	}
	if (response.ok) {
		setUsername("")
		setEmail("")
		setPassword("")
		setError(null)
        console.log("new user created!", json)
	}


  }

  return (
    <div className = 'h-screen'> 
			<nav id="navBar">
				<img src={logo} alt="LOGO" className="float-left w-20 my-1"></img>
				<Link to = '/'>
					<h1 id="titleEcho" className="float-left select-none text-5xl font-bold my-2">
						ECHO
					</h1>
				</Link>
				<Link to = '/signin'>
					<button id = 'BtnSignIn' class = 'float-right font-bold rounded-full bg-indigo-800 hover:bg-indigo-900 text-white w-32 h-12 my-2 mx-2'> 
						Sign In
					</button>
				</Link>
			</nav>

			<div class="flex justify-center items-center h-screen">
				<div class="relative top-[-100px] h-1/2 rounded-3xl p-4 ">
					<div class = 'flex justify-center items-center'>
						<h1 class="flex justify-center text-xl font-bold mb-4">Sign Up to Echo</h1>  
					</div>
					<form className = "create" onSubmit = {handleSubmit}> 
						<div class = 'mb-4'>
							<label class = 'flex justify-center text-white text-sm font-semibold mx-4' for = 'email'>
								Email
							</label>
							<input onChange = {(e) => setEmail(e.target.value)} value = {email} id = 'email' class = 'w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500 bg-indigo-950 mx-4' type ='text'placeholder='Enter your email'>
							</input>

							<label class = 'flex justify-center text-white text-sm font-semibold mx-4' for = 'username'>
								Username
							</label>
							<input onChange = {(e) => setUsername(e.target.value)} value = {username} id = 'username' class = 'w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500 bg-indigo-950 mx-4' type ='text'placeholder='Enter a username'>
							</input>
								
							<label class = 'flex justify-center text-white text-sm font-semibold mx-4' for = 'password'>
								Password
							</label>
							
							<input id = 'password' class = 'w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500 bg-indigo-950 mx-4' type ='password'placeholder='Enter your password'>
							</input>

							<label class = 'flex justify-center text-white text-sm font-semibold mx-4' for = 'password'>
								Re-Enter Password
							</label>
							<input onChange = {(e) => setPassword(e.target.value)} value = {password} id = 'password' class = 'w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500 bg-indigo-950 mx-4' type ='text'placeholder='Re-Enter your password'>
							</input>

							<div class = 'flex  justify-center items-center'>
								
									<button id = 'BtnConfirm' class = 'font-bold rounded-full bg-purple-400 hover:bg-purple-500 text-white w-32 h-12 my-2'> 
										Sign Up
									</button>  
								
							</div>
          	</div>
        	</form> 
      	</div>
    	</div>
  	</div>
  );
};

export default SignUp;