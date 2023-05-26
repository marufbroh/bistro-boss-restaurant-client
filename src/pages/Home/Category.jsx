import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../components/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle subHeading={"---From 11:00am to 10:00pm---"} heading={"ORDER ONLINE"}/>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper container mx-auto"
            >
                <SwiperSlide>
                    <img className='relative' src={slide1} alt="" />
                    <h4 className='absolute bottom-6 left-20 text-3xl font-bold text-white uppercase'>Salad</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative' src={slide2} alt="" />
                    <h4 className='absolute bottom-6 left-20 text-3xl font-bold text-white uppercase'>pizzas</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative' src={slide3} alt="" />
                    <h4 className='absolute bottom-6 left-20 text-3xl font-bold text-white uppercase'>Soups</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative' src={slide4} alt="" />
                    <h4 className='absolute bottom-6 left-20 text-3xl font-bold text-white uppercase'>desserts</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative' src={slide5} alt="" />
                    <h4 className='absolute bottom-6 left-20 text-3xl font-bold text-white uppercase'>Salad</h4>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;