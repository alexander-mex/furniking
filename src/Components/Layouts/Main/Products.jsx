import React, { useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../../styles/Products.css';
import ProductsSlider from '../Main/ProductsSlider';

const Product = () => {
  const [activePage, setActivePage] = useState(1);
  const totalPages = 100

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setActivePage(page);
    }
  };

  return (
    <div className="wrapper">
      <Container>
        <div className="production">
          <h2 className="production-title">OUR PRODUCTS</h2>
          <div className="product-lists">
            <Nav as="ul" className="production-links product-links">
              <Nav.Item as="li" className="products-list">
                <Nav.Link href="#" className="production-link">
                  All Products
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="products-list">
                <Nav.Link href="#" className="production-link">
                  Best Sellers
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="products-list">
                <Nav.Link href="#" className="production-link">
                  New Arrivals
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="products-list">
                <Nav.Link href="#" className="production-link products-link">
                  Todays Deals
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="products-slider">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
            >
              <SwiperSlide>
                <div className="products-list">
                  <ProductsSlider />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="product-pagination">
            <button 
              className="pagination-button" 
              onClick={() => handlePageChange(activePage + 1)}
              disabled={activePage === totalPages}
            >
              Next Page <i className="fa-solid fa-arrow-right-long product-icon"></i>
            </button>
            <div className="pagination">
            <span className="pagination-info">Page</span>
            <input 
              type="number" 
              className="pagination-info pagination-input" 
              value={activePage} 
              onChange={(e) => {
                const value = e.target.value;
                if (!isNaN(value) && value >= 1 && value <= totalPages) {
                  setActivePage(Number(value));
                }
              }}
              onInput={(e) => {
                const value = e.target.value.trim();
                if (!value) {
                  setActivePage('');
                }
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handlePageChange(activePage);
                } else if ((e.key === 'ArrowUp' || e.key === 'ArrowDown') && e.target.value.trim() === '') {
                  e.preventDefault();
                  handlePageChange(e.key === 'ArrowUp' ? activePage + 1 : activePage - 1);
                }
              }}
              min="1"
              max={totalPages}
            />
            <span className="pagination-info">of {totalPages}</span>
            <button 
              className="pagination-prev pagination-arrow" 
              onClick={() => handlePageChange(activePage - 1)}
              disabled={activePage === 1}
            >
              &lt;
            </button>
            <button 
              className="pagination-next pagination-arrow" 
              onClick={() => handlePageChange(activePage + 1)}
              disabled={activePage === totalPages}
            >
              &gt;
            </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
