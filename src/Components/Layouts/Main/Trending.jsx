import React from "react";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-scroll';
import '../../../styles/Trending.css';
import TrendingSlider from "./TrendingSlider";

const Trending = () => {
  return (
    <>
      <div className="wrapper">
        <div className="trends">
          <h2 className="trends-title">TRENDING</h2>
          <ul className="trends-links">
            <li className="trends-list">
              <Link to="!#" className="trends-link">
                Top Products
              </Link>
            </li>
            <li className="trends-list">
              <Link to="!#" className="trends-link">
                New Arrivals
              </Link>
            </li>
            <li className="trends-list">
              <Link to="!#" className="trends-link">
                Sellers
              </Link>
            </li>
          </ul>
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: '.swiper-pagination.dots',
              bulletClass: 'trend-dots',
              bulletActiveClass: 'trend-dots-active',
            }}
            loop={true}
          >
            <SwiperSlide>
              <TrendingSlider />
            </SwiperSlide>
            <SwiperSlide>
              <TrendingSlider />
            </SwiperSlide>
            <div className="swiper-pagination dots"></div>
          </Swiper>
      </div>
    </div>
    </>
  );
};

export default Trending;