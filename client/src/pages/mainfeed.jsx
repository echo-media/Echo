import React from 'react';
import '../index.css';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from "react-router-dom"

const MainFeed = () => { 

  const { user } = useAuthContext()
  const navigate = useNavigate()

  if (!user) {
    navigate("/login")

  } else {
      return (
        <div className = 'h-screen'>
        
        </div>
    ); 

  }
};

export default MainFeed;