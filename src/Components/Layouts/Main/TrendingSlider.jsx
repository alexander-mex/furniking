import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardImg1 from '../../../images/card-img1.png';
import CardImg2 from '../../../images/card-img2.png';
import CardImg3 from '../../../images/card-img3.png';
import CardImg4 from '../../../images/card-img4.png';
import CardImg5 from '../../../images/card-img5.png';
import CardImg6 from '../../../images/card-img6.png';
import CardImg7 from '../../../images/card-img7.png';
import CardImg8 from '../../../images/card-img8.png';

const cardData = [
  {
    imgSrc: CardImg1,
    title: 'Chair',
    description: 'Minimal LCD chair',
    newPrice: '$180',
    oldPrice: '$250',
    rating: 5,
    isNew: true,
    isSale: false,
  },
  {
    imgSrc: CardImg2,
    title: 'Chair',
    description: 'Minimal iconic chair',
    newPrice: '$120',
    oldPrice: '$150',
    rating: 4,
    isNew: true,
    isSale: false,
  },
  {
    imgSrc: CardImg3,
    title: 'Chair',
    description: 'Dining chairs',
    newPrice: '$100',
    oldPrice: '$120',
    rating: 5,
    isNew: false,
    isSale: true,
  },
  {
    imgSrc: CardImg4,
    title: 'Chair',
    description: 'Buskbo armchair',
    newPrice: '$130',
    oldPrice: '$150',
    rating: 4,
    isNew: false,
    isSale: true,
  },
  {
    imgSrc: CardImg5,
    title: 'Chair',
    description: 'Modern chairs',
    newPrice: '$100',
    oldPrice: '$120',
    rating: 0,
    isNew: false,
    isSale: true,
  },
  {
    imgSrc: CardImg6,
    title: 'Chair',
    description: 'Plastic dining chair',
    newPrice: '$130',
    oldPrice: '$150',
    rating: 4,
    isNew: false,
    isSale: true,
  },
  {
    imgSrc: CardImg7,
    title: 'Chair',
    description: 'Minimal Wood chair',
    newPrice: '$180',
    oldPrice: '$250',
    rating: 5,
    isNew: true,
    isSale: false,
  },
  {
    imgSrc: CardImg8,
    title: 'Chair',
    description: 'Elegent wood chair',
    newPrice: '$120',
    oldPrice: '$150',
    rating: 4,
    isNew: true,
    isSale: false,
  },
];

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

const TrendingSlider = () => {
  return (
    <Container>
      <Row className="trends-line">
        {cardData.map((card, index) => (
          <Col key={index} className="trends-slide">
            <div className="trends-card">
              <div className="trends-img">
                <img src={card.imgSrc} alt="Chair" />
                <div className="trend-icons">
                  <i className="fa-regular fa-heart trend-icon"></i>
                  <i className="fa-solid fa-cart-plus trend-icon"></i>
                  <i className="fa-solid fa-arrows-rotate trend-icon"></i>
                  <i className="fa-regular fa-eye trend-icon"></i>
                </div>
              </div>
              <h3 className="trends-cardTitle">{card.title}</h3>
              <p className="trands-desc">{card.description}</p>
              <div className="trends-items">
                <div className="trends-itemPrice">
                  <span className="trends-newPrice">{card.newPrice}</span>
                  <span className="trends-oldPrice">{card.oldPrice}</span>
                </div>
                <div className="trends-stars">{Rating(card.rating)}</div>
              </div>
              {card.isNew && <h5 className="trend-new">New</h5>}
              {card.isSale && <h5 className="trend-sale">Sale</h5>}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TrendingSlider;
