import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-scroll';
import { Button, Dropdown } from 'react-bootstrap';
import Login from "./Login";
import RegisterForm from "./Register";
import '../../../styles/Navbar.css';

function Navbar() {
  const [isLangChange, setLang] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [isRegister, setRegister] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLang(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
              <div ref={dropdownRef}>
                <Dropdown className="nav-itemLang">
                  <Dropdown.Toggle variant="link" id="dropdown-basic" className={`navs-link ${isLangChange ? 'active' : ''}`} onClick={toggleLang}>
                    English (USD)
                  </Dropdown.Toggle>
                  <Dropdown.Menu show={isLangChange} className={`nav-lists ${isLangChange ? 'active' : ''}`}>
                    <Dropdown.Item className="nav-lang-ua" href="#/action-1" placeholder=""><span>Ukrainian (UA)</span></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Button variant="link" className="navs-link nav_login" onClick={toggleLogin}>Login</Button>
              <span className="separator">or</span>
              <Button variant="link" className="navs-link nav_register" onClick={toggleRegister}>Sign up</Button>
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