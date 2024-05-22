import React from "react";
import '../../../styles/Reviews.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import ReviewsSlider from "./ReviewsSlider";


const Reviews = () => {
  return (
    <section className="wrapper">
      <Container>
        <div className="special">
          <h2 className="trends-title review-title">
            What Our Customer Says
          </h2>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            className="review-slider"
          >
            <div className="swiper-wrapper slider__list">
              <SwiperSlide className="swiper-slide review-slide">
                <ReviewsSlider />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide review-slide">
                <ReviewsSlider />
              </SwiperSlide>
            </div>
          </Swiper>
          <div className="swiper-button-prev slider__prev"></div>
          <div className="swiper-button-next slider__next"></div>
        </div>
      </Container>
    </section>
  );
};

export default Reviews;