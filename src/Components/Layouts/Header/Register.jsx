import React, { useState } from 'react';
import '../../../styles/Register.css';

const RegisterForm = () => {
  const [useremail, setUserEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isFormRegister, setIsFormRegister] = useState(true);

  const handleRegister = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    console.log('Useremail:', useremail);
    console.log('Username:', username);
    console.log('Password:', password);
    setPasswordError('');
  };

  const closeForm = () => {
    setIsFormRegister(false);
  };

  return (
    <div id='register'>
      {isFormRegister && (
      <div className="registerFormWrapper">
        <form className="register-form" onSubmit={handleRegister}>
          <div className="closeIcon" onClick={closeForm}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <label className="register-label">Your email:</label>
          <input
            className="register-input"
            type="text"
            value={useremail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <label className="register-label">Username:</label>
          <input
            className="register-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="register-label">Password:</label>
          <input
            className="register-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="register-label">Confirm Password:</label>
          <input
            className="register-input"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {passwordError && <p className="password-error">{passwordError}</p>}

          <button className="register-btn" type="submit">
            Register
          </button>
        </form>
      </div>
      )}
    </div>
  );
};

export default RegisterForm;
