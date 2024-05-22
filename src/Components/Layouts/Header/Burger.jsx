import React, { useState, useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Login from "./Login";
import RegisterForm from "./Register";
import '../../../styles/Navbar.css';
// import Logo from '../../../images/Logo.png';
import '../../../styles/Header.css';

function Burger() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Categories");
  const categoryRef = useRef(null);
  const [isMenu, setMenu] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [isRegister, setRegister] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!categoryRef.current.contains(event.target)) {
        setCategoryOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleMenuOutsideClick = (event) => {
      if (!event.target.closest('.nav-menu')) {
        setMenu(false);
      }
    };

    document.addEventListener("click", handleMenuOutsideClick);

    return () => {
      document.removeEventListener("click", handleMenuOutsideClick);
    };
  }, []);

  const toggleCategory = () => {
    setCategoryOpen(!categoryOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCategoryOpen(false);
  };

  const toggleLogin = () => {
    setLogin(!isLogin);
    setRegister(false);
  };

  const toggleRegister = () => {
    setRegister(!isRegister);
    setLogin(false);
  };

  const toggleMenu = () => {
    setMenu(!isMenu);
  };

  return (
    <div className="burger-menu">
      <div className="burger-head__menu">
        <div className="wrapper">
          <div className="menu">
            <div className="nav-menu" onClick={toggleMenu}>
              <div className="menu-burger">
                <span className="bar"></span>
              </div>
              <h2 className="menu-title">MENU</h2>
              <ul className={`menu-lists ${isMenu ? 'active' : ''}`}>
                <li><Link to="/home" className="menu-link">HOME</Link></li>
                <li><Link to="/shop" className="menu-link">SHOP</Link></li>
                <li><Link to="/blog" className="menu-link">BLOG</Link></li>
                <li><Link to="/about" className="menu-link">ABOUT</Link></li>
                <li><Link to="/contact" className="menu-link">CONTACT US</Link></li>
                <li>
                  <div className="authorization-container">
                    <Button variant="link" className="nav_login" onClick={toggleLogin}>Login</Button>
                      <span>or</span>
                    <Button variant="link" className="nav_register" onClick={toggleRegister}>Sign up</Button>
                  </div>
                </li>
                <li>
                  <div className="nav-itemLang">
                    <Link to="!#" className="changeLang">EN</Link>
                    <Link to="!#" className="changeLang">UA</Link>
                  </div>
                </li>
                <li>
                <Nav className="ml-auto header-menu burger-header-menu">
                  <Nav.Link href="#shopping-bag" className="header-shoppingBag">
                    <i className="fa-solid fa-bag-shopping"></i>
                    <span>4</span>
                  </Nav.Link>
                  <Nav.Link href="#notification"><i className="fa-regular fa-bell header-notification"></i></Nav.Link>
                  <Nav.Link href="#user"><i className="fa-regular fa-user header-user"></i></Nav.Link>
                </Nav>
                </li>
              </ul>
            </div>
            <Navbar className="burger-header">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Form>
                  <FormControl type="text" placeholder="Search here" className="mr-sm-2 input_search" />
                </Form>
                <Dropdown ref={categoryRef} className="header-dropdown" onToggle={toggleCategory}>
                  <Dropdown.Toggle id="dropdown-basic" className={`header-category categoryDown ${categoryOpen ? 'active' : ''}`} style={{ color: "#555" }}>
                    {selectedCategory}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className={`header-category-list ${categoryOpen ? 'active' : 'inactive'}`}>
                    <Dropdown.Item onClick={() => handleCategoryClick("All")}>All</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCategoryClick("New Arrivals")}>New Arrivals</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCategoryClick("Hot Sale")}>Hot Sale</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCategoryClick("Furniture")}>Furniture</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCategoryClick("Armchair")}>Armchair</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCategoryClick("Table")}>Table</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCategoryClick("Chair")}>Chair</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCategoryClick("Sofa")}>Sofa</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCategoryClick("Mirrors")}>Mirrors</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCategoryClick("Stools")}>Stools</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCategoryClick("Benches")}>Benches</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Button variant="outline-success" className="header-btn"><i className="fa-solid fa-magnifying-glass search__icon"></i></Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </div>
        </div>
      </div>
      {isLogin && <Login />}
      {isRegister && <RegisterForm />}
    </div>
  );
}

export default Burger;
