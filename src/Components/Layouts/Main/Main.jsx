import React from 'react';
import { Pagination, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Slider from './Slider';
import Delivery from '../../../images/delivery.svg';
import Gift from '../../../images/gift.svg';
import Wallet from '../../../images/wallet.svg';
import Support from '../../../images/support.svg';
import ModernImg from '../../../images/main__bg-left.png';
import GeometricImg from '../../../images/main__bg-rightTop.png';
import MinimalImg from '../../../images/main__bg-rightBottom.png';
import { Link } from 'react-scroll';

const Main = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide><Slider /></SwiperSlide>
        <SwiperSlide><Slider /></SwiperSlide>
        <SwiperSlide><Slider /></SwiperSlide>
        <SwiperSlide><Slider /></SwiperSlide>
      </Swiper>
      <Container>
        <Row className="main__items">
          <Col>
          <div className="main__item" style={{ marginLeft: '4rem' }}>
              <span className="main__item-icon">
                <img src={Delivery} alt="Delivery" />
              </span>
              <h3 className="main__item-title">Free Shipping</h3>
              <p className="main__item-desc">Orders over $100</p>
            </div>
          </Col>
          <Col>
            <div className="main__item">
              <span className="icon-Page main__item-icon">
                <img src={Gift} alt="Gift" />
              </span>
              <h3 className="main__item-title">Smart Gift Card</h3>
              <p className="main__item-desc">Buy $1000 to get card</p>
            </div>
          </Col>
          <Col>
            <div className="main__item">
              <span className="icon-wallet main__item-icon">
                <img src={Wallet} alt="Wallet" />
              </span>
              <h3 className="main__item-title">Quick Payment</h3>
              <p className="main__item-desc">100% secure payment</p>
            </div>
          </Col>
          <Col>
            <div className="main__item">
              <span className="icon-support main__item-icon">
                <img src={Support} alt="Support" />
              </span>
              <h3 className="main__item-title">24/7 Support</h3>
              <p className="main__item-desc">Quick support</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="wrapper">
      <Container>
        <Row className="main-collections">
          <Col md={6} className="main-collection">
            <img src={ModernImg} alt="modern" />
            <div className="main-content">
              <div className="main-title">Modern Furniture Collections</div>
              <div className="main-desc">Starting from $500</div>
              <Link to="#" className="main-link" style={{ width:'35%' }}>
                Read more
                <i className="fa-solid fa-arrow-right-long main-icon"></i>
              </Link>
            </div>
          </Col>
          <Col md={6} className="main-collection">
            <img src={GeometricImg} alt="geometric" />
            <div className="main-content">
              <div className="main-title">Geometric Bookcase</div>
              <div className="main-desc">Up to 20% discount</div>
              <Link to="#" className="main-link">
                Read more
                <i className="fa-solid fa-arrow-right-long main-icon"></i>
              </Link>
            </div>
          </Col>
          <Col md={6} className="main-collection">
            <img src={MinimalImg} alt="minimal" />
            <div className="main-content">
              <div className="main-title">Minimal Sofa collections</div>
              <div className="main-desc">Sale up to 40% discount</div>
              <Link to="#" className="main-link" style={{ width:'40%' }}>
                Read more
                <i className="fa-solid fa-arrow-right-long main-icon"></i>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default Main;
