import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../index.css';

const NoPage = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/")
  }
  return (
    <div className = 'h-screen'>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className = 'text-lg font-bold'> ERROR 404: PAGE NOT FOUND </h1>
        <button onClick = {handleClick} className = 'text-lg font-bold'> Click here to return to landing</button>
      </div>
    </div>
  );
};

export default NoPage;