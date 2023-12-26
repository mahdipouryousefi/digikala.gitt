
import image12 from '../image/amazing-summer.916.500-1.jpg'
import image13 from '../image/box.webp'
import image14 from '../image/carouselimage14.jpg.webp'
import image15 from '../image/carouselimage15.jpg.webp'
import image16 from '../image/carouselimage16.jpg.webp'
import image1 from '../image/carousel.image1.jpj.webp'
import image2 from '../image/carouselimage2.jpg (2).webp'
import image3 from '../image/carouselimage3.jpg.webp'
import image4 from '../image/caouselimage4.jpg.webp'
import image5 from '../image/carouselimage5.jpg.webp'
import image6 from '../image/carouselimage6.jpg.webp'
import image7 from '../image/carouselimage7.jpg.webp'
import image8 from '../image/caouselimage8.jpg.webp'
import image9 from '../image/carouselimage9.jpg.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

const Autoimage = () => {
  return (
    <div>
      <div className='autoimage '>

        <Swiper
          
          breakpoints={{
            200: {
              slidesPerView: 1.1,

            },
            230: {
              slidesPerView: 1.2,

            },
            250: {
              slidesPerView: 1.5,

            },
            300: {
              slidesPerView: 2,
            },
            350: {
              slidesPerView: 2.2,
            },
            400: {
              slidesPerView: 2.4,
            },
            450: {
              slidesPerView: 2.6,
            },
            500: {
              slidesPerView: 2.8,
            },
            550: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 3.2,
            },
            650: {
              slidesPerView: 3.4,
            },
            700: {
              slidesPerView: 3.8,
            },
            750: {
              slidesPerView: 4
            },
            800: {
              slidesPerView: 4.2,
            },
            820: {
              slidesPerView: 4.4,
            },

            850: {
              slidesPerView: 4.7,
            },
            880: {
              slidesPerView: 5,
            },

            900: {
              slidesPerView: 5.2,
            },

            1000: {
              slidesPerView: 5.4,
            },
            1050: {
              slidesPerView: 5.8,
            },
            1150: {
              slidesPerView: 6.2,
            },
            1250: {
              slidesPerView: 6.5,
            },
            1300: {
              slidesPerView: 6.8,
            },

          }}
          modules={[Pagination]}

        >
          <SwiperSlide>
            <div className='cardslide'>  <img className='amazing' src={image12}></img>
              <img className='box' src={image13}></img>
              <a className='head-moshahedeh'>
                <span className="moshahedeh ">مشاهده همه </span>
                <FontAwesomeIcon className='icon-cardslide' icon={faArrowLeft} style={{ color: 'white ' }}></FontAwesomeIcon>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-card-item" ><img src={image14}></img>
              <div className='price'>
                <span className='price-item1'>۸%</span> <span className='price-item2' >۹,۲۲۹,۰۰۰ <span>تومان</span></span>
              </div>
              <del className='price-item3'>۹,۹۹۹,۰۰۰</del>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-card-item" ><img src={image15}></img>
              <div className='price'>
                <span className='price-item1'>۷%</span> <span className='price-item2' >۲۷,۹۹۹,۰۰۰  <span>تومان</span></span>
              </div>
              <del className='price-item3'>۲۹,۹۹۹,۰۰۰</del>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-card-item" ><img src={image16}></img>
              <div className='price'>
                <span className='price-item1'>۴%</span> <span className='price-item2' >۲۶,۹۹۹,۰۰۰ <span>تومان</span></span>
              </div>
              <del className='price-item3'>۲۸,۰۹۹,۰۰۰</del>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-card-item" ><img src={image1}></img>
              <div className='price'>
                <span className='price-item1'>۳۰%</span> <span className='price-item2' > ۷۹۹,۰۰۰ <span>تومان</span></span>
              </div>
              <del className='price-item3'>۱,۱۴۹,۰۰۰</del>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-card-item" ><img src={image2}></img>
              <div className='price'>
                <span className='price-item1'>۴۴%</span> <span className='price-item2' > ۶۹,۹۰۰ <span>تومان</span></span>
              </div>
              <del className='price-item3'>۱۲۵,۰۰۰</del>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-card-item" ><img src={image3}></img>
              <div className='price'>
                <span className='price-item1'>۳۰%</span> <span className='price-item2' > ۴۸,۹۰۰ <span>تومان</span></span>
              </div>
              <del className='price-item3'>۷۰,۰۰۰</del>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-card-item" ><img src={image4}></img>
              <div className='price'>
                <span className='price-item1'>۲۴%</span> <span className='price-item2' > ۲۱۹,۰۰۰ <span>تومان</span></span>
              </div>
              <del className='price-item3'>۲۹۰,۰۰۰</del>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-card-item" ><img src={image5}></img>
              <div className='price'>
                <span className='price-item1'>۱۱%</span> <span className='price-item2' > ۱۸,۷۹۹,۰۰۰ <span>تومان</span></span>
              </div>
              <del className='price-item3'>۲۱,۱۹۰,۰۰۰</del>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-card-item" ><img style={{ borderRadius: '10px', marginTop: '20px' }} src={image6}></img>
              <div className='price'>
                <span ></span> <span className='price-item2' >۲,۹۵۰,۰۰۰ <span>تومان</span></span>
              </div>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-card-item" ><img src={image7}></img>
              <div className='price'>
                <span className='price-item1'>۲۰%</span> <span className='price-item2' > ۱۹,۹۰۰ <span>تومان</span></span>
              </div>
              <del className='price-item3'>۲۵,۰۰۰</del>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-card-item" ><img src={image8}></img>
              <div className='price'>
                <span className='price-item1'>۱۳%</span> <span className='price-item2' > ۶۹۷,۰۰۰ <span>تومان</span></span>
              </div>
              <del className='price-item3'>۸۰۰,۰۰۰</del>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-card-item" ><img src={image9}></img>
              <div className='price'>
                <span className='price-item1'>۴۵%</span> <span className='price-item2' >۵۴,۰۰۰ <span>تومان</span></span>
              </div>
              <del className='price-item3'>۹۸,۰۰۰</del>

            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='swiper-card-item'>
              <div className='price-item-4'>

                <FontAwesomeIcon className='price-item-4-icon'  icon={faArrowAltCircleLeft}></FontAwesomeIcon>
               <a> <span className='price-item-4-span'>مشاهده همه</span></a>

              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    
    </div>
  )
}
export default Autoimage