import logo from "../assets/logo.svg";
import '../index.css';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';


function Main() {

  return (
    <div className="h-full">
      
      <div className="flex-wrap flex flex-col items-center justify-center w-full px-5 pt-6 md:pt-14 lg:flex-nowrap">
        <div>
          <p className="select-none text-2xl sm:text-3xl md:text-4xl md:pl-10 lg:text-5xl lg:pl-40">
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-br from-[#723ec1] to-violet-300">Dive </span>Into The Depths
            <br></br>
            Of <span className="font-black text-transparent bg-clip-text bg-gradient-to-br from-violet-300 to-[#723ec1]"> Modern Social Media</span>
          </p>
          <div className="pt-3 md:pt-8 lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:auto-cols-max lg:auto-rows-max">
            <p className="main-paragraph">
            Connect and express yourself on our vibrant social media platform! Share your thoughts, photos, and videos with friends and followers in real-time. 
            </p>
            <img src={logo} alt="image of the app" className="md:w-full"></img>
            <p className="main-paragraph">
            Stay updated with the latest trends, news, and conversations on topics you love. 
            </p>
            <img src={logo} alt="image of the app" className="md:w-full"></img>
            <p className="main-paragraph">
            Engage in lively discussions, discover new interests, and build meaningful connections in a safe and inclusive online space. 
            </p>
            <img src={logo} alt="image of the app" className="md:w-full"></img>

          </div>
        </div>
      </div>
      <div className="px-5 flex items-center justify-center">
          <p className="main-paragraph pb-6">Join the conversation, create your community, and let your voice be heard!</p>
        </div>
    </div>
  );
}

export default Main;