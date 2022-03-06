import React, { useState, useEffect } from 'react';
import './App.css';
import logo         from './logo.svg';
import { Login }    from './Login.js';
import { LoggedIn } from './LoggedIn.js';

const AppName = "PMM - Plant Machine Maintenance";

function App() {
  const [loggedIn, setLogin] = useState(false);
  
  function loginSubmitOnClick(e) {
    console.log('loginSubmitOnClick');
    setLogin(true);
    useEffect(() => {
      document.title = AppName + " - " + e.username;
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        {AppName}
        <img src={logo} className="App-logo" alt="logo" />
        { loggedIn ? <LoggedIn /> : <Login submitOnClick={loginSubmitOnClick}/> }
      </header>
    </div>
  );
}

export default App;
