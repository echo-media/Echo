import logo from '../logo.svg';
import '../index.css';
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="h-screen">
      <nav id="navBar">
        <img src={logo} alt="LOGO" className="float-left w-20 my-2"></img>
        <h1 id="titleEcho" className="float-left select-none text-5xl font-bold my-2"><Link to = '/'>ECHO</Link></h1>
        <Link to = '/signup'>
          <button id="BtnSignUp" class="float-right font-bold rounded-full bg-purple-400 hover:bg-purple-500 text-white w-32 h-12 my-2 mx-2">
            Sign Up
          </button>
        </Link>
        <Link to = '/signin'>
          <button id="BtnSignin" class="float-right font-bold rounded-full bg-indigo-800 hover:bg-indigo-900 text-white w-32 h-12 my-2 mx-2"> 
            Sign In
          </button>
        </Link> 
      </nav>

      <div className="flex items-center justify-center w-screen pl-10 pt-12 mt-10">
        <div>
          <p className="text-4xl ml-20 pl-20">
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-bl from-violet-200 to-violet-400">Dive </span>Into The Depths
            <br></br>
            Of <span className="font-black text-transparent bg-clip-text bg-gradient-to-br from-violet-200 to-violet-400"> Modern Social Media</span>
          </p>
          
          <br></br>
          <p className="text-xl ml-20 mt-12 pl-20">
          Connect and express yourself on our vibrant social media platform! Share your thoughts, photos, and videos with friends and followers in real-time. 
          <br></br>Stay updated with the latest trends, news, and conversations on topics you love. 
          <br></br>Engage in lively discussions, discover new interests, and build meaningful connections in a safe and inclusive online space. 
          </p>
        </div>
        <img src={logo} alt="image of the app" className="w-7/12 float-right"></img>

      </div>
      <div className="flex items-center justify-center">
          <p className="inline-block text-xl">Join the conversation, create your community, and let your voice be heard!</p>
        </div>
    </div>
  );
}

export default Main;