import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../../../styles/Offer.css';
import OfferImg1 from '../../../images/offer-img1.png';
import OfferImg2 from '../../../images/offer-img2.png';

const OfferCard = ({ imgSrc, title, description, newPrice, oldPrice, discount, countdown }) => {
  return (
    <Col className="special-card">
      <div className="special-card-trend">
        <Card.Img src={imgSrc} alt="offer-image" className="special-image" />
        <Card.Body className="special-content">
          <Card.Title className="modern-title">{title}</Card.Title>
          <Card.Text className="special-desc">{description}</Card.Text>
          <div className="trends-items special-items">
            <div className="trends-itemPrice">
              <span className="trends-newPrice">{newPrice}</span>
              <span className="trends-oldPrice">{oldPrice}</span>
            </div>
            <Button href="!#" className="special-btn">
              SHOP NOW
            </Button>
          </div>
          <div className="special-elements">
            {countdown.map((item, index) => (
              <div key={index} className="special-element">
                <span>{item.value}</span>
                <span>{item.unit}</span>
              </div>
            ))}
          </div>
        </Card.Body>
        <h5 className="trend-off">{discount}</h5>
      </div>
    </Col>
  );
};

const Offer = () => {
  return (
    <div className="wrapper">
      <Container>
        <div className="special">
          <h2 className="trends-title special-title">SPECIAL OFFER</h2>
          <Row className="special-cards">
            <OfferCard
              imgSrc={OfferImg1}
              title="Living Room Furniture"
              description="You don't have a chair. Are you ready for growth? Shop with us 40% discount!"
              newPrice="$150"
              oldPrice="$250"
              discount="40% off"
              countdown={[
                { value: 10, unit: 'Days' },
                { value: 15, unit: 'HRS' },
                { value: 30, unit: 'MIN' },
                { value: 22, unit: 'secs' },
              ]}
            />
            <OfferCard
              imgSrc={OfferImg2}
              title="Modern chair"
              description="Hot chairs of the modern era are now available in our stock."
              newPrice="$75"
              oldPrice="$150"
              discount="50% off"
              countdown={[
                { value: 15, unit: 'Days' },
                { value: 8, unit: 'HRS' },
                { value: 20, unit: 'MIN' },
                { value: 12, unit: 'secs' },
              ]}
            />
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Offer;
