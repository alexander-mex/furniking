import React, { useState, useEffect } from "react";
import { Link } from 'react-scroll';
import '../../../styles/Menu.css';

function Menu() {
  const [isMenu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!isMenu);
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  });

  const handleOutsideClick = (event) => {
    if (!event.target.closest('.nav-menu')) {
      setMenu(false);
    }
  };

  return (
    <div className="head__menu">
      <div className="wrapper">
        <div className="menu">
          <div className="nav-menu" onClick={toggleMenu}>
            <div className="menu-burger">
              <span className="bar"></span>
            </div>
            <h2 className="menu-title">ALL COLLECTIONS</h2>
            <ul className={`menu-lists ${isMenu ? 'active' : ''}`}>
              <li><Link to="!#" className="menu-link">All</Link></li>
              <li><Link to="!#" className="menu-link">New Arrivals</Link></li>
              <li><Link to="!#" className="menu-link">Hot Sale</Link></li>
              <li><Link to="!#" className="menu-link">Furniture</Link></li>
              <li><Link to="!#" className="menu-link">Armchair</Link></li>
              <li><Link to="!#" className="menu-link">Table</Link></li>
              <li><Link to="!#" className="menu-link">Chair</Link></li>
              <li><Link to="!#" className="menu-link">Sofa</Link></li>
              <li><Link to="!#" className="menu-link">Mirrors</Link></li>
              <li><Link to="!#" className="menu-link">Stools</Link></li>
              <li><Link to="!#" className="menu-link">Benches</Link></li>
              <li className="menu-linkHome">
                <Link to="!#" className="menu-link">HOME</Link>
              </li>
              <li className="menu-linkShop">
                <Link to="!#" className="menu-link">SHOP</Link>
              </li>
              <li className="menu-linkBlog">
                <Link to="!#" className="menu-link">BLOG</Link>
              </li>
              <li className="menu-linkAbout">
                <Link to="!#" className="menu-link">ABOUT</Link>
              </li>
              <li className="menu-linkContact">
                <Link to="!#" className="menu-link">CONTACT US</Link>
              </li>
            </ul>
          </div>
          <ul className="menu-list">
            <li>
              <Link to="index.html" className="menu-link">HOME</Link>
            </li>
            <li><Link to="!#" className="menu-link">SHOP</Link></li>
            <li><Link to="!#" className="menu-link">BLOG</Link></li>
            <li><Link to="!#" className="menu-link">ABOUT</Link></li>
            <li><Link to="!#" className="menu-link">CONTACT US</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu;