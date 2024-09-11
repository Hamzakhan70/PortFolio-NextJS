"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

import SlideOne from './slides/SlideOne';
import SlideTwo from './slides/SlideTwo';
import SlideThree from './slides/SlideThree';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export default function ProjectsSlider() {
  return (
    <div className=''>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={1}
        speed={1000}
        // autoplay={{
        //     delay: 3000,
        //     disableOnInteraction: false,
        //   }}
        //   loop={true}
        coverflowEffect={{
          rotate: 90,
        //   stretch: 100,
          depth: 100,
        //   modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SlideOne />
        </SwiperSlide>
        <SwiperSlide>
          <SlideTwo />
        </SwiperSlide>
        <SwiperSlide>
          <SlideThree/>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
