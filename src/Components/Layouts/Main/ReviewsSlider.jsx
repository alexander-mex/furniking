import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RewImg1 from '../../../images/reviews-photo.png';
import '../../../styles/Reviews.css';

const ReviewData = [
  {
    imgSrc: RewImg1,
    title: 'Angelina Joly',
    subtitle: 'Co-founder',
    desc: "I like Furniking.com and as compared to other company it's polices and customers support is very good easy to reach also many time they unable to delivered. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet."
  },
]

const ReviewsSlider = () => {
  return (
    <Container>
      <Row>
        {ReviewData.map((review, index) => (
          <Col key={index} className="swiper-slide review-slide">
            <div className="review-about">
              <p className="review-desc">{review.desc}</p>
              <h2 className="review-slideTitle">{review.title}</h2>
              <h3 className="review-subtitle">{review.subtitle}</h3>
              <img src={review.imgSrc} alt="" className="review-photo" />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ReviewsSlider;