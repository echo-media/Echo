import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Main from './pages/main';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import NoPage from './pages/nopage';
import MainFeed from './pages/mainfeed';
import NavBar from "./components/navbar.jsx"

function App() {
  return (
    <div className = "App">
      <BrowserRouter>
        <NavBar />
        <div className = "pages"> 
          <Routes>
            <Route exact path="/" element={<Main />} /> 
            <Route path="/signin" element={<SignIn />} />
            <Route path = '/signup' element = {<SignUp />} />
            <Route path = '/nopage' element = {<NoPage /> } />
            <Route path = '/mainfeed' element = {<MainFeed />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    
  );
}

export default App;