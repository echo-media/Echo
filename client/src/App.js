import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Main from './pages/main';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import NoPage from './pages/nopage';
import MainFeed from './pages/mainfeed';
import NavBar from "./components/navbar.jsx"
import NewPost from "./pages/newpost.jsx"
import Profile from "./pages/profile.jsx"
import Settings from './pages/settings';
import SinglePost from './pages/singlepost';
import Friends from './pages/friends';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route 
              exact path="/" 
              element={!user ? <Main /> : <Navigate to = "/mainfeed" replace />} 
            />
            <Route
              path="/signin"
              element={!user ? <SignIn /> : <Navigate to="/mainfeed" replace />}
            />
            <Route
              path="/signup"
              element={!user ? <SignUp /> : <Navigate to="/mainfeed" replace />}
            />
            <Route path="/nopage" element={<NoPage />} />
            <Route
              path="/mainfeed"
              element={user ? <MainFeed /> : <Navigate to="/signin" replace />}
            />
            <Route
              path="/newpost"
              element={user ? <NewPost /> : <Navigate to="/signin" replace />}
            />
            <Route
              path="/profile"
              element={user ? <Profile /> : <Navigate to="/signin" replace />}
            />
            <Route
              path="/settings"
              element={user ? <Settings /> : <Navigate to="/signin" replace />}
            />
            <Route
              path="/post/:postid"
              element={user ? <SinglePost /> : <Navigate to="/signin" replace />}
            />
            <Route
              path="/friends"
              element={user ? <Friends /> : <Navigate to="/signin" replace />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;