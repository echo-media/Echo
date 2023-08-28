import '../index.css'
import { useState } from "react"
import { useSignup } from "../hooks/useSignUp.jsx"

const SignUp = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emptyFields, setEmptyFields] = useState([])
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(username, email, password);
    
	}

  return (
    <div className = 'h-screen'> 
			
			<div className="flex justify-center">
				<div className="relative top-[200px]">
					<div className = 'flex justify-center items-center'>
						<h1 className="flex justify-center text-xl font-bold mb-4">Sign Up to Echo</h1>  
					</div>
					<form className = "create" onSubmit = {handleSubmit}> 
						<div className = 'mb-4 w-screen max-w-xs'>
							<label className = 'flex justify-center text-white text-sm font-semibold mx-4' for = 'email'>
								Email
							</label>
							<input onChange = {(e) => setEmail(e.target.value)} value = {email} id = 'email' className = {emptyFields.includes('email') ? 'error': ''}  type ='text' placeholder='Enter your email'>
							</input>
							<label className = 'flex justify-center text-white text-sm font-semibold mx-4' for = 'username'>
								Username
							</label>
							<input onChange = {(e) => setUsername(e.target.value)} value = {username} id = 'username' className = {emptyFields.includes('username') ? 'error': ''} type ='text' placeholder='Enter a username'>
							</input>
							<label className = 'flex justify-center text-white text-sm font-semibold mx-4' for = 'password'>
								Enter Password
							</label>
							<input onChange = {(e) => setPassword(e.target.value)} value = {password} id = 'password' className = {emptyFields.includes('password') ? 'error': ''} type ='password' placeholder='Enter your password'>
							</input>
							<div className = 'flex justify-center items-center'>
								<button disabled={isLoading} id = 'BtnConfirm' className = 'font-bold rounded-full bg-purple-400 hover:bg-purple-500 text-white w-32 h-12 my-2'> 
									Sign Up
								</button>  
							</div>
							{error && <div className="flex justify-center items-center font-semibold border-solid border-2 border-red-600 rounded-md px-1 mt-2 bg-red-100 text-red-500">{error}</div>}
						</div>
        	</form> 
      	</div>
    	</div>
  	</div>
  );
};

export default SignUp;