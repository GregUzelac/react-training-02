import './App.css';
import { ButtonPrimary } from "./Buttons.js";
import { ErrorMessage }  from "./ErrorMessage.js";
import { useState }      from 'react';

export function Login({submitOnClick}) {
  const [usernameInput, setUsername] = useState('');
  const [passwordInput, setPassword] = useState('');
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

      e.username = usernameInput;
      submitOnClick(e);
  }

  const twoColumnGrid =
  {
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr'
  };

  return (
    <div className="Login">
      <form>
        <div style={twoColumnGrid}>
          <div>        
            <label htmlFor="email">User: </label>
          </div>
          <div>
            <input type="email" id="email" name="email" placeholder="e-mail" required
                value={usernameInput} onInput={e => setUsername(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
          </div>
          <div>
            <input type="password" id="password" name="password" required
                value={passwordInput} onInput={e => setPassword(e.target.value)} />
          </div>
        </div>

        <ButtonPrimary title="OK" type="submit" onClick={localSubmitOnClick} />
        <ErrorMessage message={errorMessage} />
      </form>
    </div>
  )
}
