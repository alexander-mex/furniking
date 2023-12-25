import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductImg1 from '../../../images/product-img1.png';
import ProductImg2 from '../../../images/product-img2.png';
import ProductImg3 from '../../../images/product-img3.png';
import ProductImg4 from '../../../images/product-img4.png';
import ProductImg5 from '../../../images/product-img5.png';
import ProductImg6 from '../../../images/product-img6.png';
import ProductImg7 from '../../../images/product-img7.png';
import ProductImg8 from '../../../images/product-img8.png';

const ProductsData = [
  {
    imgSrc: ProductImg1,
    title: 'Chair',
    description: 'Minimal LCD chair',
    newPrice: '$180',
    oldPrice: '$250',
    rating: 5,
    isNew: false,
    isSale: true,
  },
  {
    imgSrc: ProductImg2,
    title: 'Sofa',
    description: 'Modern Sofa',
    newPrice: '$120',
    oldPrice: '$150',
    rating: 4,
    isNew: true,
    isSale: false,
  },
  {
    imgSrc: ProductImg3,
    title: 'Sofa',
    description: 'Microfiber Sofa',
    newPrice: '$130',
    oldPrice: '$150',
    rating: 4,
    isNew: false,
    isSale: false,
    isBigSale: '-30%',
  },
  {
    imgSrc: ProductImg4,
    title: 'Tabble',
    description: 'Wood Coffee Tables',
    newPrice: '$100',
    oldPrice: '$120',
    rating: 5,
    isNew: false,
    isSale: true,
  },
  {
    imgSrc: ProductImg5,
    title: 'Chair',
    description: 'Acacia Wood Club Chairs',
    newPrice: '$100',
    oldPrice: '$120',
    rating: 0,
    isNew: false,
    isSale: false,
    isBigSale: '-30%',
  },
  {
    imgSrc: ProductImg6,
    title: 'Bench',
    description: 'Amalia Cowhide Bench',
    newPrice: '$130',
    oldPrice: '$150',
    rating: 4,
    isNew: false,
    isSale: true,
  },
  {
    imgSrc: ProductImg7,
    title: 'Storage',
    description: 'Juno-Hinged Lid Storage',
    newPrice: '$180',
    oldPrice: '$250',
    rating: 5,
    isNew: true,
    isSale: false,
  },
  {
    imgSrc: ProductImg8,
    title: 'Furniture',
    description: 'Delicia 3 Piece Living Room',
    newPrice: '$120',
    oldPrice: '$150',
    rating: 4,
    isNew: true,
    isSale: false,
  },
]

const Rating = (rating) => {
  if (rating === 0) {
    return null;
  }
  const stars = [];
  for (let a=0; a<5; a++) {
    if(rating > 0.5){
      stars.push(<i key={a} className="fa-regular fa-star star-green"></i>);
      rating--;
    }
    else {
      stars.push(<i key={a} className="fa-regular fa-star star-gray"></i>);
      rating--;
    }
  }
  return stars;
}

const ProductsSlider = () => {
  return (
    <Container>
      <Row className="production-line">
        {ProductsData.map((products, index) => (
          <Col key={index} className="production-slide">
            <div className="production-card">
              <div className="production-img">
                <img src={products.imgSrc} alt="Chair" />
                <div className="production-icons">
                  <i className="fa-regular fa-heart production-icon"></i>
                  <i className="fa-solid fa-cart-plus production-icon"></i>
                  <i className="fa-solid fa-arrows-rotate production-icon"></i>
                  <i className="fa-regular fa-eye production-icon"></i>
                </div>
              </div>
              <h3 className="production-cardTitle">{products.title}</h3>
              <p className="production-desc">{products.description}</p>
              <div className="production-items">
                <div className="production-itemPrice">
                  <span className="production-newPrice">{products.newPrice}</span>
                  <span className="production-oldPrice">{products.oldPrice}</span>
                </div>
                <div className="production-stars">{Rating(products.rating)}</div>
              </div>
              {products.isNew && <h5 className="production-new">New</h5>}
              {products.isSale && <h5 className="production-sale">Sale</h5>}
              {products.isBigSale && <h5 className="production-bigsale">{products.isBigSale}</h5>}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsSlider;