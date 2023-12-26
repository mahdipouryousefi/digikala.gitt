import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import image1 from '../image/image01.webp'
import image2 from '../image/photo1.jpg'
import image3 from '../image/photo2.jpg'
import image4 from '../image/photo3.jpg'
import image5 from '../image/photo4.jpg'
import image6 from '../image/photo5.jpg'

const Carousel = () => {

    return (
        <> <Swiper



            spaceBetween={5}
            centeredSlides={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}

            modules={[Autoplay, Pagination,]}

        >
            <SwiperSlide><img className='mySwiper' src={image1}></img></SwiperSlide>
            <SwiperSlide><img className='mySwiper pop' src={image2}></img></SwiperSlide>
            <SwiperSlide><img className='mySwiper pop' src={image3}></img></SwiperSlide>
            <SwiperSlide><img className='mySwiper pop ' src={image5}></img></SwiperSlide>
            <SwiperSlide><img className='mySwiper pop ' src={image6}></img></SwiperSlide>

        </Swiper>
            <img  className='mySwiper add' src={image1}></img>
        </>
        )
}
export default Carousel