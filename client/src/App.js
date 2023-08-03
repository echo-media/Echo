import logo from './logo.svg';
import './App.css';
import about from './Pages/about'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="h-screen">
      <div id="navBar" className="space-x-5">
        <button id="BtnSignUp" class="block font-bold rounded-full bg-green-500 hover:bg-green-700 text-white w-32 h-12">
          Join Echo
        </button>
        <button id="BtnLogin" class="block font-bold rounded-full bg-indigo-800 hover:bg-indigo-900 text-white w-32 h-12">
          Login
        </button>

      </div>

      
      
      
    </div>
    /*<div class="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div class = "Login">
          <button class="login font-bold rounded-full bg-indigo-800 hover:bg-indigo-900 text-white py-3 px-6">
            Login
          </button>
        </div>

        <div class = "SignUp">
          <button class="login font-bold rounded-full bg-violet-800 hover:bg-indigo-900 text-white py-3 px-6">
            Join Echo
          </button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;