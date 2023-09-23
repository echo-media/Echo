import { useState } from 'react';
import '../index.css';
import { useSignIn } from "../hooks/useSignIn.jsx"


const SignIn = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emptyFields, setEmptyFields] = useState([])
  const {signin, error, isLoading} = useSignIn()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signin(email, password)
  };
  
  return (
      <div className='flex h-[calc(100vh-38px)] md:h-[calc(100vh-44px)] lg:h-[calc(100vh-61px)] justify-center w-full'>
        <form className="self-center items-center text-center w-full max-w-lg p-5 rounded m-5 bg-accent" onSubmit={handleSubmit}>
          <h1 className="text-customtxt text-xl font-bold mb-4">Sign in to Echo</h1>
          <div>
            <label className="text-customtxt block text-sm w-full">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} id = 'email' className = {emptyFields.includes('email') ? 'error': 'bg-secondary'} type ='text' placeholder='Enter your email'></input>
          </div>
          <div>
            <label className="text-customtxt block text-sm">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} id = 'password' className = {emptyFields.includes('password') ? 'error': 'bg-secondary'} type ='password' placeholder='Enter your password'></input>
          </div>
          <button disabled = {isLoading} id = 'BtnConfirm' className = ' font-bold rounded-full bg-primary hover:bg-purple-500 text-white w-32 h-12 my-2'> 
                  Sign In
          </button> 
          {error && <div className="flex justify-center items-center font-semibold border-solid border-2 border-red-600 rounded-md px-1 mt-2 bg-red-100 text-red-500">{error}</div>}
        </form>
      {/*<div className="flex justify-center w-full align-middle">
        <div className = "align-middle">
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
      </div>*/}
    </div>
  );
};

export default SignIn;