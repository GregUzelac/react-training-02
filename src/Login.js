import './App.css';
import { ButtonPrimary } from "./Buttons.js";
import { ErrorMessage }  from "./ErrorMessage.js";
import { useState }      from 'react';

export function Login({submitOnClick}) {
  const [usernameInput, usernameSetInput] = useState('');
  const [passwordInput, passwordSetInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function localSubmitOnClick(e) {
      if (usernameInput.trim().length === 0) {
          setErrorMessage('E-mail is required');
          return;
      }
      if (passwordInput.trim().length === 0) {
          setErrorMessage('Password is required');
          return;
      }
      setErrorMessage('');
      submitOnClick(e);
  }

  const twoColumnGrid =
  {
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr'
  };

  return (
    <div className="Login">
      <form type>
        <div style={twoColumnGrid}>
          <div>        
            <label htmlFor="email">User: </label>
          </div>
          <div>
            <input type="email" name="email" placeholder="e-mail" required
                value={usernameInput} onInput={e => usernameSetInput(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
          </div>
          <div>
            <input type="password" name="password" required
                value={passwordInput} onInput={e => passwordSetInput(e.target.value)} />
          </div>
        </div>

        <ButtonPrimary title="OK" type="submit" onClick={localSubmitOnClick} />
        <ErrorMessage message={errorMessage} />
      </form>
    </div>
  )
}
