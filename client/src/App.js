import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Main from './pages/main';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import NoPage from './pages/nopage';
import MainFeed from './pages/mainfeed';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} /> 
        <Route path="/signin" element={<SignIn />} />
        <Route path = '/signup' element = {<SignUp />} />
        <Route path = '/nopage' element = {<NoPage /> } />
        <Route path = '/mainfeed' element = {<MainFeed />} />
      </Routes>
    </Router>
    
  );
}

export default App;