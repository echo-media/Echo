import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../index.css';

const NavBar = () => { 
    return (
        <nav> 
            <img src = {logo} alt = 'Logo' className = 'float-left w-20 my-1'> </img>
                <h1 id = 'titleEcho' className = "float-left select-none text-5xl font-bold my-2"> 
                    <Link to = '/'> ECHO </Link>
                </h1>
        </nav>

    ); 
};

export default NavBar;