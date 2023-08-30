import React, {useEffect, useContext} from 'react';
import '../index.css';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../context/authContext';
import ProtectPage from '../components/pageprotection';

const MainFeed = () => { 

  ProtectPage()
  
  return (
    <div className = 'h-screen'>
    
    </div>
  ); 
};

export default MainFeed;