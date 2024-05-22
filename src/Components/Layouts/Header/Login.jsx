import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
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
      <Modal show={isFormLogin} onHide={closeForm} className="loginFormWrapper">
        <Modal.Header closeButton onClick={closeForm} className='login-btn-close'>
          <h3>Login</h3>
        </Modal.Header>
        <Modal.Body>
          <Form className="login-form" onSubmit={handleLogin}>
            <Form.Label className="login-label">Username:</Form.Label>
            <Form.Control
              className="login-input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <Form.Label className="login-label">Password:</Form.Label>
            <Form.Control
              className="login-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button className="login-btn" variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LoginForm;