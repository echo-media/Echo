import React, {useEffect, useContext} from 'react';
import '../index.css';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../context/authContext';

const ProtectPage = (redirectTo) => { 

  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('User:', user);
    if (!user) {
      console.log('User is null. Redirecting to login..');
      navigate(redirectTo);
    } else {
      console.log("User Logged In")
      navigate("/mainfeed")
    }
  }, [user, navigate]);
}

export default ProtectPage;