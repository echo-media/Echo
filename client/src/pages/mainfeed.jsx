import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import '../index.css';

const MainFeed = () => { 
  return (
    <div className = 'h-screen'>
      <nav id="navBar">
        <img src={logo} alt="LOGO" className="float-left w-20 my-1"></img>
        <h1 id="titleEcho" className="float-left select-none text-5xl font-bold my-2"><Link to = '/'>ECHO</Link></h1> 
      </nav>    
    </div>
  ); 
};

export default MainFeed;