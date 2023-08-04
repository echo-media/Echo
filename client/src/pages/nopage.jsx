import React from 'react';
import logo from '../logo.svg'
import { Link } from "react-router-dom";
import '../index.css';

const NoPage = () => {
  return (
    <div className = 'h-screen'>
      <nav>
        <img src = {logo} alt='LOGO' className='float-left w-20 my-1'></img>
        <h1 id="titleEcho" className="float-left select-none text-5xl font-bold my-2"><Link to = '/'>ECHO</Link></h1>
      </nav>

      <div class="flex flex-col justify-center items-center h-screen">
        <h1 class = 'text-lg font-bold'> ERROR 404: PAGE NOT FOUND </h1>
        <h1 class = 'text-lg font-bold'> <Link to = '/'>Click Here to Return to Landing</Link></h1>
      </div>
    </div>
  );
};

export default NoPage;