import React, { useState, useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import Logo from '../../../images/Logo.png';
import '../../../styles/Header.css';

function Header() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Categories");
  const categoryRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!categoryRef.current.contains(event.target)) {
        setCategoryOpen(true);
      } else if (!categoryOpen) {
        setCategoryOpen(false);
      }
    };
  
    document.addEventListener("click", handleOutsideClick);
  
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [categoryOpen]);

  const toggleCategory = () => {
    setCategoryOpen(!categoryOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCategoryOpen(false);
  };

  return (
    <div className="container-fluid wrapper">
      <Navbar expand="xl" className="header">
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Logo" className="header__logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Form>
              <FormControl type="text" placeholder="Search here" className="mr-sm-2 input_search" />
            </Form>
            <Dropdown ref={categoryRef} className="header-dropdown" onToggle={toggleCategory}>
              <Dropdown.Toggle id="dropdown-basic" className={`header-category categoryDown ${!categoryOpen ? 'active' : ''}`} style={{color: "#555"}}>
                {selectedCategory}
              </Dropdown.Toggle>
                <Dropdown.Menu className={`header-category-list ${!categoryOpen ? 'active' : 'inactive'}`}>
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
          <Nav className="ml-auto header-menu">
            <Nav.Link href="#shopping-bag" className="header-shoppingBag">
              <i className="fa-solid fa-bag-shopping"></i>
              <span>4</span>
            </Nav.Link>
            <Nav.Link href="#notification"><i className="fa-regular fa-bell header-notification"></i></Nav.Link>
            <Nav.Link href="#user"><i className="fa-regular fa-user header-user"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;