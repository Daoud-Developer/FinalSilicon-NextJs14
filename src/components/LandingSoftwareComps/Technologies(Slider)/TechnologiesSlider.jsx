"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function TechnologiesSlider() {
  return (
    <section className="container mb-5 pb-lg-5 pb-md-4 pb-3">
      {/* Swiper slider */}
      <Swiper
        // Install modules
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={24}
        slidesPerView={2} // Default number of slides
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // When window width is >= 500px
          500: {
            slidesPerView: 3,
          },
          // When window width is >= 768px
          768: {
            slidesPerView: 4,
          },
          // When window width is >= 1200px
          1200: {
            slidesPerView: 6,
          },
        }}
        pagination={{ 
          className:".swiper-pagination",
          clickable: true }}
        className="swiper mb-xl-3 text-sm-start text-center"
      >
        {/* You can map through an array of technologies instead of hardcoding each slide */}
        <SwiperSlide>
              {/* Swiper item */}
        <div className="swiper-slide">
          <div className="mb-3">
            <Image src="/assets/img/landing/software-agency-3/technologies/js-light.svg" alt="Logo" 
            className="d-dark-mode-none d-inline-block" width={64} height={64}/>
            <Image src="/assets/img/landing/software-agency-3/technologies/js-dark.svg" alt="Logo" 
            className="d-dark-mode-inline-block d-none" width={64} height={64}/>
          </div>
          <span className="text-body">Javascript</span>
        </div>
        </SwiperSlide>
            <SwiperSlide>
            
        {/* <!-- Swiper item --> */}
        <div className="swiper-slide">
          <div className="mb-3">
            <Image src="/assets/img/landing/software-agency-3/technologies/node-light.svg" alt="Logo" 
            className="d-dark-mode-none d-inline-block" width={64} height={64}/>
            <Image src="/assets/img/landing/software-agency-3/technologies/node-dark.svg" alt="Logo" 
            className="d-dark-mode-inline-block d-none" width={64} height={64}/>
          </div>
          <span className="text-body">Node.JS</span>
        </div>
            </SwiperSlide>           
              <SwiperSlide>
             {/* <!-- Swiper item --> */}
        <div className="swiper-slide">
          <div className="mb-3">
            <Image src="/assets/img/landing/software-agency-3/technologies/react-light.svg" alt="Logo" 
            className="d-dark-mode-none d-inline-block" width={64} height={64}/>
            <Image src="/assets/img/landing/software-agency-3/technologies/react-dark.svg" alt="Logo" 
            className="d-dark-mode-inline-block d-none" width={70} height={70}/>
          </div>
          <span className="text-body">React</span>
        </div>
                  </SwiperSlide>
                  <SwiperSlide>
              {/* <!-- Swiper item --> */}
        <div className="swiper-slide">
          <div className="mb-3">
            <Image src="/assets/img/landing/software-agency-3/technologies/php-light.svg" alt="Logo" 
            className="d-dark-mode-none d-inline-block" width={64} height={64}/>
            <Image src="/assets/img/landing/software-agency-3/technologies/php-dark.svg" alt="Logo" 
            className="d-dark-mode-inline-block d-none" width={64} height={64}/>
          </div>
          <span className="text-body">PHP</span>
        </div>
                  </SwiperSlide>
                  <SwiperSlide>              
        {/* <!-- Swiper item --> */}
        <div className="swiper-slide">
          <div className="mb-3">
            <Image src="/assets/img/landing/software-agency-3/technologies/angular-light.svg" alt="Logo" 
            className="d-dark-mode-none d-inline-block"  width={64} height={64}/>
            <Image src="/assets/img/landing/software-agency-3/technologies/angular-dark.svg" alt="Logo" 
            className="d-dark-mode-inline-block d-none" width={64} height={64}/>
          </div>
          <span className="text-body">Angular</span>
        </div>

                  </SwiperSlide>

                  <SwiperSlide>

                   {/* <!-- Swiper item --> */}
        <div className="swiper-slide">
          <div className="mb-3">
            <Image src="/assets/img/landing/software-agency-3/technologies/python-light.svg" alt="Logo" 
            className="d-dark-mode-none d-inline-block" width={64} height={64}/>
            <Image src="/assets/img/landing/software-agency-3/technologies/python-dark.svg" alt="Logo" 
            className="d-dark-mode-inline-block d-none" width={64} height={64}/>
          </div>
          <span className="text-body">Python</span>
        </div>
                  </SwiperSlide>
        {/* Swiper pagination */}
        <div className="swiper-pagination position-static mt-4 pt-lg-3 pt-2"></div>
      </Swiper>
    </section>
  );
}

export default TechnologiesSlider;