import React from 'react';
import { Link } from "react-router-dom";
import '../index.css';

const NoPage = () => {
  return (
    <div className = 'h-screen'>
  

      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className = 'text-lg font-bold'> ERROR 404: PAGE NOT FOUND </h1>
        <h1 className = 'text-lg font-bold'> <Link to = '/'>Click Here to Return to Landing</Link></h1>
      </div>
    </div>
  );
};

export default NoPage;