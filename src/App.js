import React, { useEffect, useState, Fragment } from 'react';
import './App.css';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Navbar from './components/Navbar.js';
import Sidebar from './components/Sidebar.js';
import MainContent from './components/MainContent.js';

function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [token, setToken] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  function handleShowSignup(){
    setShowSignup(!showSignup)
  }

  return (
    <div className='App'>
      {isLogged ?
            <Fragment>
              <Navbar/>
              <Sidebar/>
              <MainContent token={token}/>
            </Fragment> :
            <Fragment>
              <h1 className='facebook-logo'>f</h1>
              <Login setIsLogged={setIsLogged} setToken={setToken}/>
              <button className='signup-popup-btn btn' onClick={() => setShowSignup(true)}>Create New Account</button>
              {showSignup ? <Signup handleShowSignup={handleShowSignup} /> : null}
            </Fragment>
      }
    </div>
  );
}

export default App;
