import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
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
      <Modal show={isFormRegister} onHide={closeForm} className="registerFormWrapper">
        <Modal.Header closeButton onClick={closeForm} className='register-btn-close'>
          <h3>Sign Up</h3>
        </Modal.Header>
        <Modal.Body>
          <Form className="register-form" onSubmit={handleRegister}>
            <Form.Label className="register-label">Your email:</Form.Label>
            <Form.Control
              className="register-input"
              type="text"
              value={useremail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <Form.Label className="register-label">Username:</Form.Label>
            <Form.Control
              className="register-input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <Form.Label className="register-label">Password:</Form.Label>
            <Form.Control
              className="register-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Form.Label className="register-label">Confirm Password:</Form.Label>
            <Form.Control
              className="register-input"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {passwordError && <p className="password-error">{passwordError}</p>}

            <Button className="register-btn" variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default RegisterForm;