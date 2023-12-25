import React, { useState } from "react";
import { Link } from 'react-scroll';
import Login from "./Login";
import RegisterForm from "./Register";
import '../../../styles/Navbar.css';

function Navbar() {
  const [isLangChange, setLang] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [isRegister, setRegister] = useState(false);

  const toggleLang = () => {
    setLang(!isLangChange);
  };

  const toggleLogin = () => {
    setLogin(!isLogin);
    setRegister(false);
  };

  const toggleRegister = () => {
    setRegister(!isRegister);
    setLogin(false);
  };

  return (
    <div>
      <div className="header__nav">
        <div className="wrapper">
          <div className="nav-items">
            <div className="nav-itemLeft">
              <Link to="!#" className="navs-link">Welcome to our online shop</Link>
            </div>
            <div className="nav-itemRight">
              <div className="nav-itemLang" onClick={toggleLang}>
                <Link to="!#" className={`navs-link ${isLangChange ? 'active' : ''}`} onClick={toggleLang}>English (USD)</Link>
                <i className={`fa-solid fa-chevron-down arrowDown ${isLangChange ? 'active' : ''}`}></i>
                <ul className={`nav-lists ${isLangChange ? 'active' : ''}`}>
                  <li><Link to="!#" className="navs-link">Ukrainian (UA)</Link></li>
                </ul>
              </div>
              <Link to="!#" className="navs-link" onClick={toggleLogin}>Login</Link>
              <span>or</span>
              <Link to="!#" className="navs-link" onClick={toggleRegister}>Sign up</Link>
            </div>
          </div>
        </div>
      </div>

      {isLogin && <Login />}
      {isRegister && <RegisterForm />}
    </div>
  );
}

export default Navbar;
