import { useState } from 'react';
import '../index.css';
import { useSignIn } from "../hooks/useSignIn.jsx"
import ProtectPage from '../components/pageprotection';

const SignIn = () => {
  // redirect if already logged in
  ProtectPage("/signin", "/mainfeed")

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emptyFields, setEmptyFields] = useState([])
  const {signin, error, isLoading} = useSignIn()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signin(email, password)
  };
  
  return (
    <div className = 'h-screen'>
      <div className="flex justify-center">
        <div className = "relative top-[200px]">
          <div className = 'flex justify-center items-center'>
            <h1 className="text-xl font-bold mb-4">Sign In to Echo</h1>  
          </div>
          <form onSubmit = {handleSubmit}> 
            <div className = 'mb-4 w-screen max-w-xs'>
              <label className = 'flex justify-center text-white text-sm font-semibold mb-1' for = 'email'>
                  Email
              </label>
              <input onChange={(e) => setEmail(e.target.value)} id = 'email' className = {emptyFields.includes('email') ? 'error': ''} type ='text' placeholder='Enter your email'>
              </input>
            
              <label className = 'flex justify-center text-white text-sm font-semibold mb-1' for = 'password'>
                  Password
              </label>
              <input onChange={(e) => setPassword(e.target.value)} id = 'password' className = {emptyFields.includes('password') ? 'error': ''} type ='password' placeholder='Enter your password'>
              </input>
              <div className = 'flex justify-center items-center'>
                <button disabled = {isLoading} id = 'BtnConfirm' className = ' font-bold rounded-full bg-primary hover:bg-purple-500 text-white w-32 h-12 my-2'> 
                  Sign In
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

export default SignIn;