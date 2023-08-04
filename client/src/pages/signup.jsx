import react from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../index.css';

const SignUp = () => {
    return (
        <div className = 'h-screen'> 
            <nav id="navBar">
                <img src={logo} alt="LOGO" className="float-left w-20 my-1"></img>
                <h1 id="titleEcho" className="float-left select-none text-5xl font-bold my-2">
                <Link to = '/'>ECHO</Link>
                </h1>

                <button id = 'BtnSignIn' class = 'float-right font-bold rounded-full bg-indigo-800 hover:bg-indigo-900 text-white w-32 h-12 my-2'> 
                    <Link to = '/SignIn'> Sign In</Link>
                </button>
            </nav>

            <div class="flex justify-center items-center h-screen">
            <div class="bg-gray-300 h-1/2 rounded-3xl p-4">
                <div class = 'flex justify-center items-center'>
                    <h1 class="text-xl font-bold mb-4">Sign Up to Echo</h1>  
                </div>
                <form> 
                    <div class = 'mb-4'>
                        <label class = 'block text-gray-600 text-sm font-semibold mb-1' for = 'email'>
                            Email
                        </label>
                        <input id = 'email' class = 'w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500 bg-indigo-950' type ='email'placeholder='Enter your email'>
                        </input>

                        <label class = 'block text-gray-600 text-sm font-semibold mb-1' for = 'username'>
                            Username
                        </label>
                        <input id = 'username' class = 'w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500 bg-indigo-950' type ='name'placeholder='Enter a username'>
                        </input>
                        
                        <label class = 'block text-gray-600 text-sm font-semibold mb-1' for = 'password'>
                            Password
                        </label>
                        <input id = 'password' class = 'w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500 bg-indigo-950' type ='password'placeholder='Enter your password'>
                        </input>

                        <label class = 'block text-gray-600 text-sm font-semibold mb-1' for = 'password'>
                            Re-Enter Password
                        </label>
                        <input id = 'password' class = 'w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500 bg-indigo-950' type ='password'placeholder='Re-Enter your password'>
                        </input>

                        <div class = 'flex justify-end justify-center items-center items-center'>
                            <button id = 'BtnConfirm' class = 'float-right font-bold rounded-full bg-indigo-800 hover:bg-indigo-900 text-white w-32 h-12 my-2'> 
                                <Link to = '/mainfeed'>Sign Up</Link>
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