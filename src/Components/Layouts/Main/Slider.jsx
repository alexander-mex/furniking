import React from 'react';
import { Link } from 'react-scroll';
import Underline from '../../../images/underline.png';
import Img1 from '../../../images/header__slider-img.png';
import Img2 from '../../../images/header__slider-miniImg1.png';
import Img3 from '../../../images/header__slider-miniImg2.png';
import Img4 from '../../../images/header__slider-miniImg3.png';
import '../../../styles/Main.css';

const mainSlider = [
  {
    subtitle: 'TOP COLLECTIONS 2022',
    title: 'We Serve Your Dream Furniture',
    discount: 'Get 50% off all products',
    imgSrc1: Img1,
    imgSrc2: Img2,
    imgSrc3: Img3,
    imgSrc4: Img4,
    price2: '120',
    price3: '180',
    price4: '250',
    desc2: 'Office Desk Chair',
    desc3: 'Home Alisa Sofa',
    desc4: 'Modern Chair',
  },
];

const Slider = () => {
  return (
    <>
      {mainSlider.map((slide, index) => (
        <main key={index} className="main">
          <div className="wrapper">
            <section key={index} className="section">
              <div className="main__top">
                <div className="top__left"></div>
                <div className="top__right">
                  <div className="slider swiper">
                    <div className="line swiper-wrapper">
                      <div className="slide swiper-slide">
                        <div className="slide-left">
                          <h3 className="slide-subtitle">{slide.subtitle}</h3>
                          <h2 className="slide-title">{slide.title}</h2>
                          <p className="slide-discount">{slide.discount}</p>
                          <Link to="#!" className="slide-btn">
                            SHOP NOW
                          </Link>
                          <img src={Underline} alt="underline" className="slide-underline" />
                        </div>
                        <div className="slide-img">
                          <img src={slide.imgSrc1} alt='furniture' />
                        </div>
                        <div className="slide-tabs">
                          <div className="slide-tab">
                            <img src={slide.imgSrc2} alt='furniture' />
                            <span className="slide-price">{slide.price2}</span>
                            <p className="slide-desc">{slide.desc2}</p>
                          </div>
                          <div className="slide-tab">
                            <img src={slide.imgSrc3} alt='furniture' />
                            <span className="slide-price">{slide.price3}</span>
                            <p className="slide-desc">{slide.desc3}</p>
                          </div>
                          <div className="slide-tab">
                            <img src={slide.imgSrc4} alt='furniture' />
                            <span className="slide-price">{slide.price4}</span>
                            <p className="slide-desc">{slide.desc4}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      ))}
    </>
  );
};

export default Slider;
