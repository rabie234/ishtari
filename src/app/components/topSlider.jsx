"use client"; 


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './topslide.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function TopSlide() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="topSwiper"
      >
             <SwiperSlide>
        <div className='w-full'>
                <img className='w-full' src="https://www.ishtari.com/image/data/system_banner/10000/2800/2784/web-umbrella.png" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-full'>
                <img className='w-full' src="https://www.ishtari.com/image/data/system_banner/10000/2800/2784/web-umbrella.png" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-full'>
                <img className='w-full' src="https://www.ishtari.com/image/data/system_banner/10000/2800/2784/web-umbrella.png" alt="" />
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
