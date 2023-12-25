import React, { useState } from 'react';
import '../../../styles/Login.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFormLogin, setIsFormLogin] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    setIsFormLogin(false);
  };

  const closeForm = () => {
    setIsFormLogin(false);
  };

  return (
    <div id='login'>
      {isFormLogin && (
        <div className="loginFormWrapper">
          <form className="login-form" onSubmit={handleLogin}>
            <div className="closeIcon" onClick={closeForm}>
              <i className="fa-solid fa-xmark"></i>
            </div>
            <label className="login-label">Username:</label>
            <input
              className="login-input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label className="login-label">Password:</label>
            <input
              className="login-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="login-btn" type="submit">
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
