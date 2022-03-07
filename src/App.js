import React, { useState, useEffect } from 'react';
import './App.css';
import logo         from './logo.svg';
import { Login }    from './Login.js';
import { LoggedIn } from './LoggedIn.js';

const AppName = "PMM - Plant Machine Maintenance";

function App() {
  const [user, setUser] = useState("");

  function loginSubmitOnClick(e) {
    setUser({ name: e.username });
  }

  useEffect(() => {
    const name = user.name ? " - " + user.name : "";
    document.title = AppName + name;
  }, [user.name]);

  return (
    <div className="App">
      <header className="App-header">
        {AppName}
        <img src={logo} className="App-logo" alt="logo" />
        { user.name ? <LoggedIn /> : <Login submitOnClick={loginSubmitOnClick}/> }
      </header>
    </div>
  );
}

export default App;
