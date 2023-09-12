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
      navigate(notLoggedIn); // Use notLoggedIn prop directly here
    } else {
      console.log('User Logged In');
      navigate(loggedIn); // Use loggedIn prop directly here
    }
  }, [user, navigate, notLoggedIn, loggedIn]); // Add notLoggedIn and loggedIn to the dependency array

  // You should return something from your component. For example:
  return <div>Loading...</div>;
};

export default ProtectPage;