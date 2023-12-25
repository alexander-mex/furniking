import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-scroll';
import Logo from '../../../images/Logo.png';
import '../../../styles/Header.css';

function Header() {
  const [isCategory, setCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Categories");
  const categoryRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setCategory(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleCategory = () => {
    setCategory(!isCategory);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCategory(false);
  };

  return (
    <div className="wrapper">
      <section className="header">
        <Link to="!#" className="header-logo">
          <img src={Logo} alt="Logo" className="header__logo" />
        </Link>
        <form action="" className="header-form">
          <input type="text" placeholder="Search here" className="header-input" />
          <div className="header-category" ref={categoryRef}>
            <h3 className="header-dropdown" onClick={toggleCategory}>{selectedCategory}</h3>
            <i className={`fa-solid fa-chevron-down categoryDown ${isCategory ? 'active' : ''}`} onClick={toggleCategory}></i>
            <ul className={`header-category-list ${isCategory ? 'active' : 'inactive'}`}>
              <li onClick={() => handleCategoryClick("All")}>
                <Link to="!#" className="header__item-link" onClick={() => handleCategoryClick("All")}>All</Link>
              </li>
              <li onClick={() => handleCategoryClick("New Arrivals")}>
                <Link to="!#" className="header__item-link" onClick={() => handleCategoryClick("New Arrivals")}>New Arrivals</Link>
              </li>
              <li onClick={() => handleCategoryClick("Hot Sale")}>
                <Link to="!#" className="header__item-link" onClick={() => handleCategoryClick("Hot Sale")}>Hot Sale</Link>
              </li>
              <li onClick={() => handleCategoryClick("Furniture")}>
                <Link to="!#" className="header__item-link" onClick={() => handleCategoryClick("Furniture")}>Furniture</Link>
              </li>
              <li onClick={() => handleCategoryClick("Armchair")}>
                <Link to="!#" className="header__item-link" onClick={() => handleCategoryClick("Armchair")}>Armchair</Link>
              </li>
              <li onClick={() => handleCategoryClick("Table")}>
                <Link to="!#" className="header__item-link" onClick={() => handleCategoryClick("Table")}>Table</Link>
              </li>
              <li onClick={() => handleCategoryClick("Chair")}>
                <Link to="!#" className="header__item-link" onClick={() => handleCategoryClick("Chair")}>Chair</Link>
              </li>
              <li onClick={() => handleCategoryClick("Sofa")}>
                <Link to="!#" className="header__item-link" onClick={() => handleCategoryClick("Sofa")}>Sofa</Link>
              </li>
              <li onClick={() => handleCategoryClick("Mirrors")}>
                <Link to="!#" className="header__item-link" onClick={() => handleCategoryClick("Mirrors")}>Mirrors</Link>
              </li>
              <li onClick={() => handleCategoryClick("Stools")}>
                <Link to="!#" className="header__item-link" onClick={() => handleCategoryClick("Stools")}>Stools</Link>
              </li>
              <li onClick={() => handleCategoryClick("Benches")}>
                <Link to="!#" className="header__item-link" onClick={() => handleCategoryClick("Benches")}>Benches</Link>
              </li>
            </ul>
          </div>
          <Link to="!#" className="header-btn"><i className="fa-solid fa-magnifying-glass search__icon"></i></Link>
        </form>
        <div className="header-menu">
          <Link to="!#" className="header-shoppingBag">
            <i className="fa-solid fa-bag-shopping"></i>
            <span>4</span>
          </Link>
          <Link to="!#" className="header-notification"><i className="fa-regular fa-bell"></i></Link>
          <Link to="!#" className="header-user"><i className="fa-regular fa-user"></i></Link>
        </div>
      </section>
    </div>
  );
}

export default Header;