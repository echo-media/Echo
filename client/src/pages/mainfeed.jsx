import React, {useEffect, useContext} from 'react';
import '../index.css';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../context/authContext';
import ProtectPage from '../components/pageprotection';

const MainFeed = () => { 

  ProtectPage("/signin", "/mainfeed")
  
  return (
    <div className = 'h-screen '>
      <div className = "flex justify-center item-center h-full relative top-[200px] bg-white">
        POSTS GO HERE 
      </div>
    
    </div>
  ); 
};

export default MainFeed;