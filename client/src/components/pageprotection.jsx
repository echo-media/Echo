import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const ProtectPage = ({ notLoggedIn, loggedIn }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('User:', user);
    if (!user) {
      console.log('User is null. Redirecting to login..');
      navigate(notLoggedIn); 
    } else {
      console.log('User Logged In');
      navigate(loggedIn); 
    }
  }, [user, navigate, notLoggedIn, loggedIn]); 

  
  return <div>Loading...</div>;
};

export default ProtectPage;