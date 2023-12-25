import React from 'react';
import { Link } from 'react-scroll';
import { Container, Row, Col } from 'react-bootstrap';
import '../../../styles/Footer.css';
import Logo from '../../../images/Logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
      <Container>
        <Row>
          <Col className="footer_nav">
            <ul className="footer_nav-lists">
              <li className="footer_nav-list">
                <img src={Logo} alt="" className="footer_nav-logo" />
                <p className="footer_nav-desc">
                  Funking is a popular E-commerce site. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
                <div className="footer_nav-socials">
                  <Link to="!#" className="footer_nav-social">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="!#" className="footer_nav-social">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="!#" className="footer_nav-social">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link to="!#" className="footer_nav-social">
                    <i className="fab fa-pinterest-p"></i>
                  </Link>
                </div>
              </li>
              <li className="footer_nav-list">
              <h2 className="footer_nav-title">Help</h2>
              <Link to="!#" className="footer_nav-link">Privacy Policy</Link>
              <Link to="!#" className="footer_nav-link">Shipping & Delivery</Link>
              <Link to="!#" className="footer_nav-link">Refund Policy</Link>
              <Link to="!#" className="footer_nav-link">Track Your Order</Link>
            </li>
            <li className="footer_nav-list">
              <h2 className="footer_nav-title">Store</h2>
              <Link to="!#" className="footer_nav-link">Furniture</Link>
              <Link to="!#" className="footer_nav-link">Tabble</Link>
              <Link to="!#" className="footer_nav-link">Sofa</Link>
              <Link to="!#" className="footer_nav-link">Other</Link>
            </li>
            <li className="footer_nav-list">
              <h2 className="footer_nav-title">Supports</h2>
              <Link to="!#" className="footer_nav-link">Feedbcak</Link>
              <Link to="!#" className="footer_nav-link">Contact us</Link>
              <Link to="!#" className="footer_nav-link">Download app</Link>
              <Link to="!#" className="footer_nav-link">Terms conditins</Link>
            </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer_bottom">
        <Container>
          <div className="footer_bottom-nav">
            <span className="footer_span">
              © 2023 Funking - All rights reserved.
            </span>
            <ul className="footer_bottom-links">
              <li className="footer_bottom-list">
                <Link to="!#" className="footer_bottom-link">
                  Privacy
                </Link>
              </li>
              <li className="footer_bottom-list">
                <Link to="!#" className="footer_bottom-link">
                  Security
                </Link>
              </li>
              <li className="footer_bottom-list">
                <Link to="!#" className="footer_bottom-link">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </Container>
        </div>
      </div>
    </footer>
  );
};

export default Footer;